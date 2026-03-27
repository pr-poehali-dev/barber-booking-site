import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Сохраняет заявку на запись в барбершоп в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    master = body.get('master', '').strip()
    service = body.get('service', '').strip()
    booking_date = body.get('date', '').strip()
    booking_time = body.get('time', '').strip()

    if not name or not phone or not booking_date or not booking_time:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните все обязательные поля'}
        }

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute(
        f"""
        INSERT INTO {schema}.bookings (name, phone, master, service, booking_date, booking_time)
        VALUES (%s, %s, %s, %s, %s, %s)
        RETURNING id
        """,
        (name, phone, master or None, service or None, booking_date, booking_time)
    )
    booking_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'ok': True, 'id': booking_id}
    }
