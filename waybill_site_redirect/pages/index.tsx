
import Head from 'next/head'
import Link from 'next/link'

const plans = [
  { id: 'standard', title: 'شحن عادي', price: '15 ر.س', desc: '3-5 أيام عمل' },
  { id: 'express', title: 'شحن سريع', price: '25 ر.س', desc: '1-2 يوم عمل' },
  { id: 'cold', title: 'شحن مبرّد', price: '35 ر.س', desc: 'مناسب للأغذية' },
];

export default function Home() {
  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen flex flex-col">
      <Head><title>بوليصات شحن مخفضة</title></Head>
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto py-6 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-700">بوليصات مخفضة</h1>
          <a href="https://wa.me/966500000000?text=أرغب%20في%20بوليصة%20شحن"
             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            تواصل واتساب
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto p-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            اختر خطتك وابدأ الشحن فورًا
          </h2>
          <p className="text-gray-600">
            الأسعار تشمل الخصم الخاص بنا – بعد اختيارك ستنتقل لتعبئة بيانات الشحنة وإصدار البوليصة مباشرة لدى شركة الشحن.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {plans.map(p => (
            <div key={p.id} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-3xl font-bold text-indigo-700 mb-2">{p.price}</p>
              <p className="text-gray-600 mb-6 flex-1">{p.desc}</p>
              <Link href={`/api/redirect?service=${p.id}`}>
                <a className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded block text-center">
                  اشترِ الآن
                </a>
              </Link>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="mt-16 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">آراء عملائنا</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-700">“وفّرنا 30٪ من تكاليف الشحن السريع وشحنتنا وُصلت في أقل من 24 ساعة!”</p>
              <span className="text-sm text-gray-500">— متجر أحذية الرياض</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-700">“الخدمة المبرَّدة ممتازة لمنتجاتنا الغذائية، والتتبّع لحظي.”</p>
              <span className="text-sm text-gray-500">— ألبان القصيم</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        <p>© 2025 خدمة البوليصات المخفضة. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}
