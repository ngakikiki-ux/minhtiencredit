import React from 'react';
import { Phone, CheckCircle, Shield, User, MessageSquare, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const services = [
    'Vay theo lương',
    'Vay theo bảo hiểm y tế',
    'Vay theo hóa đơn điện',
    'Vay theo thẻ tín dụng',
    'Hỗ trợ theo bảo hiểm nhân thọ'
  ];

  const conditions = [
    'Tuổi từ 21 đến 57',
    'Làm việc tại công ty từ 2 tháng',
    'Thu nhập từ 2 triệu trở lên',
    'Hỗ trợ theo bảo hiểm nhân thọ'
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-[#004b91] text-lg">Tư Vấn Tài Chính</span>
          <a href="tel:0987306837" className="bg-[#004b91] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Phone size={16} /> 0987 306 837
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Hỗ Trợ Tài Chính Nhanh,<br />
            <span className="text-[#004b91]">Thủ Tục Đơn Giản</span>
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            Giải pháp tài chính cá nhân phù hợp, thủ tục rõ ràng, hướng dẫn tận tình từ chuyên viên Shinhan Bank.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0987306837" className="bg-[#004b91] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg">
              Gọi ngay 0987 306 837
            </a>
            <a href="https://zalo.me/0987306837" className="bg-white text-[#004b91] border-2 border-[#004b91] px-8 py-4 rounded-xl font-bold text-lg">
              Nhắn Zalo tư vấn
            </a>
          </div>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center border-b-4 border-[#004b91] w-fit mx-auto pb-2">Dịch Vụ Hỗ Trợ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4">
                <CheckCircle className="text-[#004b91] shrink-0" />
                <span className="font-semibold">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Điều kiện */}
      <section className="py-16 px-4 bg-[#004b91] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Điều Kiện Cơ Bản</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-lg flex items-center gap-3">
                <Shield size={20} className="text-blue-300" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chuyên viên */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 border p-8 rounded-2xl shadow-sm">
          <div className="w-32 h-32 bg-slate-200 rounded-full overflow-hidden shrink-0">
            <img src="https://picsum.photos/seed/pro/200/200" alt="Minh Tiến" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">LU NGỌC MINH TIẾN</h3>
            <p className="text-[#004b91] font-bold mb-4 text-lg">Chuyên viên tư vấn - Shinhan Bank Việt Nam</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="tel:0987306837" className="bg-[#004b91] text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                <Phone size={18} /> Gọi ngay
              </a>
              <a href="https://zalo.me/0987306837" className="bg-slate-100 text-[#004b91] px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                <MessageSquare size={18} /> Nhắn tin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Cần Tư Vấn Tài Chính Nhanh?</h2>
        <p className="mb-8 text-slate-400">Liên hệ ngay để được hỗ trợ thủ tục đơn giản nhất.</p>
        <a href="tel:0987306837" className="inline-flex items-center gap-2 bg-[#004b91] text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl">
          Gọi 0987 306 837 <ArrowRight />
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t text-center text-slate-500 text-sm">
        <p className="font-bold text-slate-800 mb-1">Tư Vấn Tài Chính Cá Nhân</p>
        <p>LU NGỌC MINH TIẾN - Shinhan Bank Việt Nam</p>
        <p className="mt-2">Hotline: 0987 306 837</p>
      </footer>

      {/* Floating Button */}
      <a href="tel:0987306837" className="fixed bottom-6 right-6 w-14 h-14 bg-[#004b91] text-white rounded-full flex items-center justify-center shadow-2xl z-50 animate-bounce">
        <Phone size={24} />
      </a>
    </div>
  );
}

