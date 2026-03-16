import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X,
  MessageCircle,
  ArrowRight,
  FileText,
  CreditCard,
  Zap,
  Heart
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { title: 'Vay theo lương', icon: <Zap className="w-6 h-6" /> },
    { title: 'Vay theo bảo hiểm y tế', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Vay theo hóa đơn điện', icon: <FileText className="w-6 h-6" /> },
    { title: 'Vay theo thẻ tín dụng', icon: <CreditCard className="w-6 h-6" /> },
    { title: 'Hỗ trợ theo bảo hiểm nhân thọ', icon: <Heart className="w-6 h-6" /> },
  ];

  const conditions = [
    'Tuổi từ 21 đến 57',
    'Làm việc tại công ty từ 2 tháng',
    'Thu nhập từ 2 triệu trở lên',
    'Hỗ trợ theo bảo hiểm nhân thọ'
  ];

  const processSteps = [
    { title: 'Đăng ký thông tin', desc: 'Điền form hoặc gọi trực tiếp' },
    { title: 'Chuyên viên liên hệ', desc: 'Tư vấn chi tiết trong 15-30 phút' },
    { title: 'Kiểm tra điều kiện', desc: 'Thẩm định hồ sơ nhanh chóng' },
    { title: 'Hướng dẫn thủ tục', desc: 'Hoàn tất và nhận hỗ trợ' }
  ];

  const faqs = [
    { q: 'Điều kiện hỗ trợ là gì?', a: 'Bạn cần từ 21-57 tuổi, có công việc ổn định từ 2 tháng và thu nhập từ 2 triệu đồng/tháng.' },
    { q: 'Có thể đăng ký theo hình thức nào?', a: 'Bạn có thể đăng ký qua form trên website, gọi hotline 0987 306 837 hoặc nhắn tin qua Zalo.' },
    { q: 'Bao lâu có người liên hệ?', a: 'Thông thường chuyên viên sẽ liên hệ lại trong vòng 15-30 phút sau khi nhận được thông tin.' },
    { q: 'Có được tư vấn trước không?', a: 'Tất nhiên, chúng tôi tư vấn hoàn toàn miễn phí trước khi bạn quyết định làm hồ sơ.' },
    { q: 'Có thể gọi trực tiếp không?', a: 'Có, bạn có thể gọi trực tiếp chuyên viên Tiến qua số 0987 306 837 bất cứ lúc nào.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-[#004b91] tracking-tight">Tư Vấn Tài Chính Cá Nhân</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-sm font-medium hover:text-[#004b91] transition-colors">Trang chủ</a>
              <a href="#services" className="text-sm font-medium hover:text-[#004b91] transition-colors">Dịch vụ</a>
              <a href="#conditions" className="text-sm font-medium hover:text-[#004b91] transition-colors">Điều kiện</a>
              <a href="#process" className="text-sm font-medium hover:text-[#004b91] transition-colors">Quy trình</a>
              <a href="#contact" className="text-sm font-medium hover:text-[#004b91] transition-colors">Liên hệ</a>
              <a href="#register" className="bg-[#004b91] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                Đăng ký tư vấn
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium">Trang chủ</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium">Dịch vụ</a>
            <a href="#conditions" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium">Điều kiện</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium">Quy trình</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium">Liên hệ</a>
            <a href="#register" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#004b91] text-white py-3 rounded-xl font-bold">
              Đăng ký tư vấn
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Hỗ Trợ Tài Chính Nhanh,<br />
            <span className="text-[#004b91]">Thủ Tục Đơn Giản</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hỗ trợ tư vấn giải pháp tài chính cá nhân phù hợp, thủ tục rõ ràng, dễ tiếp cận và được hướng dẫn tận tình bởi chuyên viên từ Shinhan Bank.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#register" className="bg-[#004b91] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1">
              Đăng ký tư vấn ngay
            </a>
            <a href="tel:0987306837" className="bg-white text-[#004b91] border-2 border-[#004b91] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              <Phone size={20} /> Gọi ngay 0987 306 837
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <Clock className="text-[#004b91]" /> Tư vấn nhanh
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-[#004b91]" /> Thủ tục đơn giản
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <ShieldCheck className="text-[#004b91]" /> Hỗ trợ tận tình
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch Vụ Hỗ Trợ</h2>
            <div className="w-20 h-1.5 bg-[#004b91] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-[#004b91]/30 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004b91] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm">Giải pháp linh hoạt, xét duyệt nhanh chóng dựa trên hồ sơ hiện có của bạn.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section id="conditions" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-[#004b91] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Điều Kiện Cơ Bản</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conditions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 className="flex-shrink-0 text-blue-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy Trình Hỗ Trợ</h2>
            <p className="text-slate-500">Nhanh chóng - Minh bạch - Chuyên nghiệp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#004b91] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Info */}
      <section id="contact" className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-slate-200 overflow-hidden flex-shrink-0 shadow-inner">
            <img 
              src="https://picsum.photos/seed/consultant/400/400" 
              alt="LU NGỌC MINH TIẾN" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-blue-50 text-[#004b91] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Chuyên viên tư vấn
            </span>
            <h2 className="text-3xl font-bold mb-2">LU NGỌC MINH TIẾN</h2>
            <p className="text-xl text-[#004b91] font-semibold mb-6">Shinhan Bank Việt Nam</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="tel:0987306837" className="bg-[#004b91] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-all">
                <Phone size={18} /> Gọi ngay
              </a>
              <a href="https://zalo.me/0987306837" target="_blank" rel="noreferrer" className="bg-white text-[#004b91] border border-[#004b91] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all">
                <MessageCircle size={18} /> Nhắn tư vấn
              </a>
            </div>
            <p className="mt-6 text-slate-500 text-sm italic">"Luôn sẵn sàng lắng nghe và hỗ trợ bạn tìm ra giải pháp tài chính tối ưu nhất."</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đăng Ký Nhận Tư Vấn</h2>
            <p className="text-slate-500">Vui lòng để lại thông tin, tôi sẽ liên hệ lại ngay.</p>
          </div>
          
          <form className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Họ và tên</label>
                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#004b91] focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Số điện thoại</label>
                <input type="tel" placeholder="09xx xxx xxx" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#004b91] focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Hình thức quan tâm</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#004b91] focus:border-transparent outline-none transition-all appearance-none bg-white">
                <option>Vay theo lương</option>
                <option>Vay theo bảo hiểm y tế</option>
                <option>Vay theo hóa đơn điện</option>
                <option>Vay theo thẻ tín dụng</option>
                <option>Hỗ trợ theo bảo hiểm nhân thọ</option>
                <option>Khác</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Ghi chú (nếu có)</label>
              <textarea rows={3} placeholder="Nội dung cần tư vấn thêm..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#004b91] focus:border-transparent outline-none transition-all"></textarea>
            </div>

            <button className="w-full bg-[#004b91] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Nhận tư vấn ngay <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="text-[#004b91]" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-[#004b91] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Cần Tư Vấn Tài Chính Nhanh?</h2>
          <p className="text-xl mb-12 text-blue-100">Đừng ngần ngại, hãy liên hệ ngay để được hỗ trợ giải pháp tốt nhất cho bạn.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:0987306837" className="bg-white text-[#004b91] px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
              Gọi 0987 306 837
            </a>
            <a href="#register" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-2xl border border-blue-400">
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Tư Vấn Tài Chính Cá Nhân</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cung cấp các giải pháp tài chính linh hoạt, an toàn và minh bạch. Đồng hành cùng bạn trên con đường ổn định tài chính.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liên Hệ</h3>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2"><User size={16} /> LU NGỌC MINH TIẾN</p>
              <p className="flex items-center gap-2"><ShieldCheck size={16} /> Shinhan Bank Việt Nam</p>
              <p className="flex items-center gap-2"><Phone size={16} /> 0987 306 837</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Điều Khoản</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Quy trình giải quyết khiếu nại</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 Tư Vấn Tài Chính Cá Nhân - LU NGỌC MINH TIẾN. All rights reserved.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a href="https://zalo.me/0987306837" target="_blank" rel="noreferrer" className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </a>
        <a href="tel:0987306837" className="w-14 h-14 bg-[#004b91] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce">
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

