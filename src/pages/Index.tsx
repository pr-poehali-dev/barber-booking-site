import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a8df8ae7-8ff8-4d15-b5ba-e01789ac9254/files/406875d1-b55a-4910-9808-d46510919bc3.jpg";
const BARBER_IMG = "https://cdn.poehali.dev/projects/a8df8ae7-8ff8-4d15-b5ba-e01789ac9254/files/1742d580-31d7-42ed-8882-6e61da09576c.jpg";
const WORK_IMG = "https://cdn.poehali.dev/projects/a8df8ae7-8ff8-4d15-b5ba-e01789ac9254/files/c16c08e1-7a55-4ca7-a6e9-5b159329d00f.jpg";

const masters = [
  {
    name: "Артём Волков",
    role: "Старший барбер",
    exp: "8 лет опыта",
    spec: "Фейды, классика, королевское бритьё",
    img: BARBER_IMG,
  },
  {
    name: "Михаил Грин",
    role: "Барбер-стилист",
    exp: "5 лет опыта",
    spec: "Современные тренды, укладки, окрашивание",
    img: BARBER_IMG,
  },
  {
    name: "Дмитрий Орлов",
    role: "Мастер бороды",
    exp: "6 лет опыта",
    spec: "Моделирование бороды, горячее бритьё",
    img: BARBER_IMG,
  },
];

const priceCategories = [
  {
    tier: "ЭКОНОМ",
    badge: "price-badge-eco",
    color: "#4a7a4a",
    desc: "Качественно и доступно",
    services: [
      { name: "Стрижка машинкой", price: "600 ₽" },
      { name: "Стрижка ножницами", price: "700 ₽" },
      { name: "Стрижка + борода", price: "900 ₽" },
      { name: "Оформление бороды", price: "400 ₽" },
    ],
  },
  {
    tier: "СТАНДАРТ",
    badge: "price-badge-std",
    color: "#4a6aaa",
    desc: "Популярный выбор",
    services: [
      { name: "Стрижка + укладка", price: "1 100 ₽" },
      { name: "Фейд + текстура", price: "1 300 ₽" },
      { name: "Стрижка + борода + укладка", price: "1 600 ₽" },
      { name: "Горячее бритьё", price: "800 ₽" },
    ],
  },
  {
    tier: "ПРЕМИУМ",
    badge: "price-badge-prem",
    color: "#d4a843",
    desc: "Максимальный уход",
    services: [
      { name: "Королевский комплекс", price: "2 500 ₽" },
      { name: "VIP-стрижка + уход", price: "2 000 ₽" },
      { name: "Окрашивание волос", price: "от 2 200 ₽" },
      { name: "Полный уход за бородой", price: "1 500 ₽" },
    ],
  },
];

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "masters", label: "Мастера" },
  { id: "booking", label: "Запись" },
  { id: "contacts", label: "Контакты" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    master: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen noise-bg" style={{ background: "var(--brand-dark)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(212,168,67,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <span
              className="text-2xl font-black tracking-widest glow-gold"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-gold)" }}
            >
              ✂ SHARP
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="nav-link text-sm font-medium tracking-widest uppercase"
                style={{ color: "var(--brand-text)", fontFamily: "Oswald, sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="px-6 py-2 text-sm font-bold tracking-widest uppercase"
              style={{
                background: "var(--brand-gold)",
                color: "#0a0a0a",
                fontFamily: "Oswald, sans-serif",
                borderRadius: "2px",
              }}
            >
              Записаться
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--brand-gold)" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: "rgba(10,10,10,0.98)" }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-base font-medium tracking-widest uppercase py-2"
                style={{ color: "var(--brand-text)", fontFamily: "Oswald, sans-serif", borderBottom: "1px solid #222" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="mt-2 px-6 py-3 text-sm font-bold tracking-widest uppercase"
              style={{ background: "var(--brand-gold)", color: "#0a0a0a", fontFamily: "Oswald, sans-serif", borderRadius: "2px" }}
            >
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.6) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            background: "linear-gradient(135deg, transparent 40%, var(--brand-gold) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
          <div className="max-w-2xl">
            <p
              className="fade-in-up-delay-1 mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--brand-gold)" }}
            >
              Барбершоп нового уровня
            </p>
            <h1
              className="fade-in-up-delay-2 text-6xl md:text-8xl font-black uppercase leading-none mb-6"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              БУДЬ
              <br />
              <span style={{ color: "var(--brand-gold)" }} className="glow-gold">
                SHARP
              </span>
            </h1>
            <p
              className="fade-in-up-delay-3 text-lg md:text-xl mb-10 max-w-lg"
              style={{ color: "#aaa", fontFamily: "Golos Text, sans-serif" }}
            >
              Мастера с опытом от 5 лет. Современные техники. Честные цены. Запись онлайн за 30 секунд.
            </p>
            <div className="fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("booking")}
                className="px-10 py-4 text-base font-bold tracking-widest uppercase transition-all hover:scale-105"
                style={{
                  background: "var(--brand-gold)",
                  color: "#0a0a0a",
                  fontFamily: "Oswald, sans-serif",
                  borderRadius: "2px",
                  boxShadow: "0 8px 30px rgba(212,168,67,0.4)",
                }}
              >
                Записаться онлайн
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-10 py-4 text-base font-bold tracking-widest uppercase transition-all hover:scale-105"
                style={{
                  background: "transparent",
                  color: "var(--brand-text)",
                  fontFamily: "Oswald, sans-serif",
                  border: "1px solid rgba(245,240,232,0.3)",
                  borderRadius: "2px",
                }}
              >
                Смотреть цены
              </button>
            </div>

            <div className="fade-in-up-delay-4 flex gap-10 mt-14 justify-center md:justify-start">
              {[
                { num: "3", label: "Мастера" },
                { num: "500+", label: "Клиентов" },
                { num: "8", label: "Лет опыта" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-3xl font-black"
                    style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-gold)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#666" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#555" }}
        >
          <span className="text-xs tracking-widest uppercase">Вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "var(--brand-mid)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--brand-gold)" }}>
              Прозрачные цены
            </p>
            <h2
              className="text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              Услуги & Прайс
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {priceCategories.map((cat) => (
              <div
                key={cat.tier}
                className={`card-hover rounded-sm p-8 ${cat.badge}`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${cat.color}, transparent)`,
                  }}
                />
                <div className="mb-6">
                  <span
                    className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-sm"
                    style={{ background: cat.color, color: "#0a0a0a" }}
                  >
                    {cat.tier}
                  </span>
                  <p className="mt-3 text-sm" style={{ color: "#999" }}>
                    {cat.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {cat.services.map((s) => (
                    <div
                      key={s.name}
                      className="flex justify-between items-center pb-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <span className="text-sm" style={{ color: "var(--brand-text)" }}>
                        {s.name}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: cat.color, fontFamily: "Oswald, sans-serif" }}
                      >
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("booking")}
                  className="mt-8 w-full py-3 text-sm font-bold tracking-widest uppercase transition-all hover:opacity-80"
                  style={{
                    background: cat.color,
                    color: "#0a0a0a",
                    fontFamily: "Oswald, sans-serif",
                    borderRadius: "2px",
                  }}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-24 px-6" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--brand-gold)" }}>
              Команда
            </p>
            <h2
              className="text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              Наши Мастера
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masters.map((m) => (
              <div key={m.name} className="card-hover group">
                <div className="relative overflow-hidden rounded-sm mb-5" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                      style={{ background: "var(--brand-gold)", color: "#0a0a0a" }}
                    >
                      {m.exp}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold uppercase mb-1"
                  style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
                >
                  {m.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: "var(--brand-gold)" }}>
                  {m.role}
                </p>
                <p className="text-sm" style={{ color: "#888" }}>
                  {m.spec}
                </p>
                <button
                  onClick={() => scrollTo("booking")}
                  className="mt-4 text-sm font-bold tracking-widest uppercase flex items-center gap-2 transition-all hover:gap-3"
                  style={{ color: "var(--brand-gold)", fontFamily: "Oswald, sans-serif" }}
                >
                  Записаться к мастеру <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--brand-mid)", minHeight: "400px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div
            className="min-h-[300px]"
            style={{
              backgroundImage: `url(${WORK_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col justify-center px-12 py-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--brand-gold)" }}>
              Наша работа
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              Каждая стрижка —<br />
              <span style={{ color: "var(--brand-gold)" }}>произведение</span>
            </h2>
            <p style={{ color: "#888", lineHeight: "1.8" }}>
              Используем только профессиональную косметику и инструменты. Следим за мировыми трендами и техниками барберинга.
            </p>
            <button
              onClick={() => scrollTo("booking")}
              className="mt-8 self-start px-8 py-3 text-sm font-bold tracking-widest uppercase"
              style={{
                background: "var(--brand-gold)",
                color: "#0a0a0a",
                fontFamily: "Oswald, sans-serif",
                borderRadius: "2px",
              }}
            >
              Попробовать
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--brand-gold)" }}>
              Онлайн-запись
            </p>
            <h2
              className="text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              Записаться
            </h2>
            <p className="mt-4 text-sm" style={{ color: "#888" }}>
              Заполните форму — мы перезвоним и подтвердим время
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center py-16 rounded-sm glow-box"
              style={{ background: "var(--brand-card)", border: "1px solid rgba(212,168,67,0.3)" }}
            >
              <div className="text-5xl mb-4">✅</div>
              <h3
                className="text-3xl font-black uppercase mb-3"
                style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-gold)" }}
              >
                Заявка принята!
              </h3>
              <p style={{ color: "#888" }}>
                Мы свяжемся с вами в ближайшее время для подтверждения записи.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3 text-sm font-bold tracking-widest uppercase"
                style={{
                  background: "var(--brand-gold)",
                  color: "#0a0a0a",
                  fontFamily: "Oswald, sans-serif",
                  borderRadius: "2px",
                }}
              >
                Записаться ещё раз
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleBooking}
              className="rounded-sm p-8 md:p-12"
              style={{ background: "var(--brand-card)", border: "1px solid #222" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Ваше имя *
                  </label>
                  <input
                    required
                    className="sharp-input"
                    placeholder="Иван Иванов"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Телефон *
                  </label>
                  <input
                    required
                    type="tel"
                    className="sharp-input"
                    placeholder="+7 (999) 000-00-00"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Мастер
                  </label>
                  <select
                    className="sharp-input"
                    value={bookingForm.master}
                    onChange={(e) => setBookingForm({ ...bookingForm, master: e.target.value })}
                  >
                    <option value="">Любой мастер</option>
                    {masters.map((m) => (
                      <option key={m.name} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Услуга
                  </label>
                  <select
                    className="sharp-input"
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                  >
                    <option value="">Выбрать услугу</option>
                    <optgroup label="Эконом">
                      <option>Стрижка машинкой — 600 ₽</option>
                      <option>Стрижка ножницами — 700 ₽</option>
                      <option>Стрижка + борода — 900 ₽</option>
                    </optgroup>
                    <optgroup label="Стандарт">
                      <option>Стрижка + укладка — 1 100 ₽</option>
                      <option>Фейд + текстура — 1 300 ₽</option>
                      <option>Горячее бритьё — 800 ₽</option>
                    </optgroup>
                    <optgroup label="Премиум">
                      <option>Королевский комплекс — 2 500 ₽</option>
                      <option>VIP-стрижка + уход — 2 000 ₽</option>
                      <option>Окрашивание волос — от 2 200 ₽</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Дата *
                  </label>
                  <input
                    required
                    type="date"
                    className="sharp-input"
                    min={new Date().toISOString().split("T")[0]}
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#888" }}>
                    Время *
                  </label>
                  <select
                    required
                    className="sharp-input"
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                  >
                    <option value="">Выбрать время</option>
                    {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full py-4 text-base font-black tracking-widest uppercase transition-all hover:scale-[1.02]"
                style={{
                  background: "var(--brand-gold)",
                  color: "#0a0a0a",
                  fontFamily: "Oswald, sans-serif",
                  borderRadius: "2px",
                  boxShadow: "0 8px 30px rgba(212,168,67,0.3)",
                }}
              >
                Отправить заявку →
              </button>
              <p className="mt-4 text-center text-xs" style={{ color: "#555" }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: "var(--brand-mid)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--brand-gold)" }}>
              Где нас найти
            </p>
            <h2
              className="text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
            >
              Контакты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["ул. Ленина, 42", "2-й этаж, офис 5"],
              },
              {
                icon: "Clock",
                title: "Часы работы",
                lines: ["Пн–Пт: 10:00 – 21:00", "Сб–Вс: 10:00 – 20:00"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (999) 000-00-00", "@sharp_barbershop"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-sm p-8 text-center card-hover"
                style={{ background: "var(--brand-card)", border: "1px solid #222" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,168,67,0.15)", color: "var(--brand-gold)" }}
                >
                  <Icon name={c.icon} size={22} />
                </div>
                <h3
                  className="text-lg font-bold uppercase mb-3"
                  style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-text)" }}
                >
                  {c.title}
                </h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm" style={{ color: "#888" }}>
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center"
        style={{ background: "#050505", borderTop: "1px solid rgba(212,168,67,0.1)" }}
      >
        <span
          className="text-xl font-black tracking-widest uppercase glow-gold"
          style={{ fontFamily: "Oswald, sans-serif", color: "var(--brand-gold)" }}
        >
          ✂ SHARP
        </span>
        <p className="mt-2 text-xs tracking-widest" style={{ color: "#444" }}>
          © 2024 — Барбершоп нового уровня
        </p>
      </footer>
    </div>
  );
}