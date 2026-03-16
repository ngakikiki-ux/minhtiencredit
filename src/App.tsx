import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  CheckCircle, 
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
  Heart,
  TrendingUp,
  Clock4,
  CheckCircle2,
  Info,
  MapPin,
  Mail,
  Award,
  Users
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { 
      title: 'Vay theo lương', 
      desc: 'Hỗ trợ khách hàng đi làm hưởng lương chuyển khoản hoặc tiền mặt với lãi suất ưu đãi.',
      icon: <Zap className="w-6 h-6" /> 
    },
    { 
      title: 'Vay theo bảo hiểm y tế', 
      desc: 'Dành cho khách hàng có tham gia bảo hiểm y tế tại công ty đang làm việc hiện tại.',
      icon: <ShieldCheck className="w-6 h-6" /> 
    },
    { 
      title: 'Vay theo hóa đơn điện', 
      desc: 'Hỗ trợ dựa trên hóa đơn tiền điện sinh hoạt hàng tháng của hộ gia đình.',
      icon: <FileText className="w-6 h-6" /> 
    },
    { 
      title: 'Vay theo thẻ tín dụng', 
      desc: 'Dành cho chủ thẻ tín dụng của các ngân hàng đang hoạt động có lịch sử tốt.',
      icon: <CreditCard className="w-6 h-6" /> 
    },
    { 
      title: 'Hỗ trợ bảo hiểm nhân thọ', 
      desc: 'Dành cho khách hàng có hợp đồng bảo hiểm nhân thọ đã tham gia trên 1 năm.',
      icon: <Heart className="w-6 h-6" /> 
    },
    { 
      title: 'Tư vấn tài chính tổng thể', 
      desc: 'Giải pháp cơ cấu nợ và quản lý tài chính cá nhân hiệu quả, bền vững.',
      icon: <TrendingUp className="w-6 h-6" /> 
    },
  ];

  const conditions = [
    { title: 'Độ tuổi', detail: 'Từ 21 đến 57 tuổi' },
    { title: 'Thâm niên', detail: 'Làm việc từ 2 tháng trở lên' },
    { title: 'Thu nhập', detail: 'Từ 2 triệu đồng/tháng' },
    { title: 'Nợ xấu', detail: 'Không nợ xấu' },
    { title: 'Khu vực', detail: 'Hỗ trợ toàn quốc' }
  ];

  const processSteps = [
    { title: 'Đăng ký thông tin', desc: 'Cung cấp thông tin cơ bản qua form hoặc hotline.' },
    { title: 'Chuyên viên liên hệ', desc: 'Tiến sẽ gọi lại tư vấn giải pháp phù hợp nhất.' },
    { title: 'Kiểm tra hồ sơ', desc: 'Hướng dẫn chuẩn bị giấy tờ đơn giản, nhanh chóng.' },
    { title: 'Giải ngân nhanh', desc: 'Hồ sơ được phê duyệt và nhận tiền trong thời gian ngắn.' }
  ];

  const reasons = [
    { title: 'Hướng dẫn rõ ràng', desc: 'Mọi quy trình đều được giải thích minh bạch, dễ hiểu.', icon: <Info className="w-6 h-6" /> },
    { title: 'Tiết kiệm thời gian', desc: 'Thủ tục tối giản, xử lý hồ sơ nhanh chóng nhất.', icon: <Clock4 className="w-6 h-6" /> },
    { title: 'Hỗ trợ tận tình', desc: 'Luôn đồng hành và giải đáp mọi thắc mắc của khách hàng.', icon: <Heart className="w-6 h-6" /> },
    { title: 'Thông tin minh bạch', desc: 'Cam kết bảo mật và rõ ràng về mọi khoản phí, lãi suất.', icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  const faqs = [
    { q: 'Điều kiện hỗ trợ cơ bản là gì?', a: 'Bạn cần nằm trong độ tuổi từ 21-57, có công việc ổn định từ 2 tháng, thu nhập từ 2 triệu đồng/tháng và không có nợ xấu. Tùy hình thức vay mà có thêm các giấy tờ bổ trợ khác.' },
    { q: 'Tôi có thể đăng ký theo hình thức nào?', a: 'Bạn có thể đăng ký trực tiếp qua form trên website này, gọi hotline 0987 306 837 hoặc nhắn tin qua Zalo để được hỗ trợ tức thì.' },
    { q: 'Bao lâu sẽ có người liên hệ tư vấn?', a: 'Thông thường chuyên viên Tiến sẽ liên hệ lại trong vòng 15-30 phút sau khi nhận được thông tin đăng ký của bạn.' },
    { q: 'Có mất phí tư vấn không?', a: 'Hoàn toàn KHÔNG. Chúng tôi tư vấn miễn phí 100% để giúp bạn tìm ra giải pháp tài chính phù hợp nhất.' },
    { q: 'Tôi có thể gọi trực tiếp không?', a: 'Có, bạn có thể gọi trực tiếp chuyên viên Tiến qua số 0987 306 837 bất cứ lúc nào kể cả ngày nghỉ.' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-[#004b91]' : 'text-[#004b91] md:text-slate-900'}`}>
                TƯ VẤN TÀI CHÍNH
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['Trang chủ', 'Dịch vụ', 'Điều kiện', 'Quy trình', 'Liên hệ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item === 'Trang chủ' ? 'home' : item === 'Dịch vụ' ? 'services' : item === 'Điều kiện' ? 'conditions' : item === 'Quy trình' ? 'process' : 'contact'}`} 
                  className="text-sm font-bold text-slate-600 hover:text-[#004b91] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#004b91] transition-all group-hover:w-full"></span>
                </a>
              ))}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register" 
                className="bg-[#004b91] text-white px-7 py-3 rounded-full text-sm font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
              >
                Đăng ký tư vấn
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-6">
                {['Trang chủ', 'Dịch vụ', 'Điều kiện', 'Quy trình', 'Liên hệ'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item === 'Trang chủ' ? 'home' : item === 'Dịch vụ' ? 'services' : item === 'Điều kiện' ? 'conditions' : item === 'Quy trình' ? 'process' : 'contact'}`} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block text-xl font-black text-slate-800"
                  >
                    {item}
                  </a>
                ))}
                <a href="#register" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#004b91] text-white py-4 rounded-2xl font-black text-lg">
                  Đăng ký tư vấn
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-56 md:pb-40 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white border border-slate-200 text-[#004b91] rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Award size={14} /> Chuyên viên Shinhan Bank Việt Nam
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Hỗ Trợ Tài Chính Nhanh,<br />
              <span className="text-[#004b91] relative inline-block">
                Thủ Tục Đơn Giản
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Giải pháp tài chính cá nhân an toàn, minh bạch. Được hướng dẫn trực tiếp bởi chuyên viên ngân hàng, giúp bạn giải quyết nhu cầu vốn tức thì.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#register" 
                className="bg-[#004b91] text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/30"
              >
                Đăng ký tư vấn ngay
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:0987306837" 
                className="bg-white text-[#004b91] border-2 border-slate-200 px-12 py-5 rounded-2xl font-black text-lg hover:border-[#004b91] transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <Phone size={22} /> 0987 306 837
              </motion.a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
              {[
                { label: 'Tư vấn nhanh', icon: <Clock size={20} /> },
                { label: 'Thủ tục đơn giản', icon: <CheckCircle2 size={20} /> },
                { label: 'Hỗ trợ tận tình', icon: <Heart size={20} /> },
                { label: 'Bảo mật 100%', icon: <ShieldCheck size={20} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#004b91]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-black text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#004b91] font-black text-sm uppercase tracking-[0.2em] mb-4 block">Giải pháp của chúng tôi</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Dịch Vụ Hỗ Trợ Tài Chính Đa Dạng</h2>
            </div>
            <p className="text-slate-500 font-medium md:max-w-xs">Phù hợp với mọi nhu cầu và điều kiện thực tế của khách hàng.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#004b91] mb-8 shadow-sm group-hover:bg-[#004b91] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.desc}</p>
                <a href="#register" className="inline-flex items-center text-[#004b91] font-black text-sm group-hover:gap-3 transition-all">
                  ĐĂNG KÝ NGAY <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section id="conditions" className="py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#004b91] rounded-[3rem] p-10 md:p-20 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-blue-400/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-200 font-black text-sm uppercase tracking-[0.2em] mb-6 block">Tiêu chuẩn hỗ trợ</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Điều Kiện Cơ Bản Để Được Hỗ Trợ</h2>
                <p className="text-blue-100/80 text-lg font-medium mb-10 leading-relaxed">
                  Chúng tôi tối giản hóa mọi điều kiện để giúp khách hàng dễ dàng tiếp cận nguồn vốn cần thiết một cách nhanh nhất.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#004b91] bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-blue-100">1,000+ khách hàng đã tin tưởng</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conditions.map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-blue-300 text-xs font-black uppercase tracking-widest mb-2">{item.title}</div>
                    <div className="text-xl font-black">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#004b91] font-black text-sm uppercase tracking-[0.2em] mb-4 block">Lộ trình làm việc</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Quy Trình Tư Vấn 4 Bước</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-[#F8FAFC] text-[#004b91] rounded-[2rem] flex items-center justify-center text-3xl font-black mb-8 shadow-sm group-hover:bg-[#004b91] group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-900/20 transition-all duration-500 relative z-10">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 font-medium px-4 leading-relaxed">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-100 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="text-[#004b91] font-black text-sm uppercase tracking-[0.2em] mb-4 block">Tại sao chọn chúng tôi</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">Lợi Ích Khi Đăng Ký Tư Vấn</h2>
            </div>
            <a href="#register" className="bg-white text-[#004b91] px-8 py-4 rounded-2xl font-black shadow-sm border border-slate-200 hover:border-[#004b91] transition-all">
              Bắt đầu ngay hôm nay
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-[#004b91] rounded-2xl flex items-center justify-center mb-8">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">{reason.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Info */}
      <section id="contact" className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 bg-[#004b91] rounded-[3.5rem] overflow-hidden shadow-3xl">
          <div className="lg:w-2/5 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/consultant/800/1000" 
              alt="LU NGỌC MINH TIẾN" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004b91] via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>
          <div className="lg:w-3/5 p-10 md:p-20 text-white flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-fit">
              <Award size={14} className="text-blue-300" /> Chuyên viên tư vấn cấp cao
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">LU NGỌC MINH TIẾN</h2>
            <p className="text-2xl text-blue-200 font-bold mb-10">Shinhan Bank Việt Nam</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-300">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xs font-black text-blue-300 uppercase tracking-widest">Kinh nghiệm</div>
                  <div className="text-lg font-bold">Hơn 5 năm trong ngành</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-300">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-xs font-black text-blue-300 uppercase tracking-widest">Khách hàng</div>
                  <div className="text-lg font-bold">1,200+ hồ sơ thành công</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0987306837" 
                className="bg-white text-[#004b91] px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl"
              >
                <Phone size={22} /> 0987 306 837
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://zalo.me/0987306837" 
                target="_blank"
                className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl"
              >
                <MessageCircle size={22} /> Nhắn Zalo tư vấn
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#004b91] font-black text-sm uppercase tracking-[0.2em] mb-6 block">Liên hệ ngay</span>
              <h2 className="text-5xl font-black mb-8 text-slate-900 leading-tight">Đăng Ký Nhận Tư Vấn Miễn Phí</h2>
              <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                Để lại thông tin bên dưới, chuyên viên Tiến sẽ trực tiếp liên hệ để phân tích và đề xuất giải pháp tài chính tối ưu nhất cho bạn trong vòng 15 phút.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#004b91] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Hotline trực tiếp</div>
                    <div className="text-2xl font-black text-slate-900">0987 306 837</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#004b91] flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Bảo mật thông tin</div>
                    <div className="text-lg font-bold text-slate-700">Cam kết bảo mật dữ liệu khách hàng 100% theo tiêu chuẩn ngân hàng.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-3xl shadow-blue-900/5 border border-slate-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Họ và tên</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#004b91] outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Số điện thoại</label>
                    <input type="tel" placeholder="09xx xxx xxx" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#004b91] outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Dịch vụ quan tâm</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#004b91] outline-none transition-all font-bold appearance-none cursor-pointer">
                    <option>Vay theo lương</option>
                    <option>Vay theo bảo hiểm y tế</option>
                    <option>Vay theo hóa đơn điện</option>
                    <option>Vay theo thẻ tín dụng</option>
                    <option>Hỗ trợ bảo hiểm nhân thọ</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Ghi chú (không bắt buộc)</label>
                  <textarea rows={3} placeholder="Nhu cầu cụ thể của bạn..." className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#004b91] outline-none transition-all font-bold"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#004b91] text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/20 flex items-center justify-center gap-3 group"
                >
                  GỬI YÊU CẦU NGAY <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#004b91] font-black text-sm uppercase tracking-[0.2em] mb-4 block">Giải đáp thắc mắc</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-[2rem] border border-slate-100 overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-7 text-left flex justify-between items-center hover:bg-slate-100 transition-colors"
                >
                  <span className="font-black text-slate-800 text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-[#004b91] text-white rotate-180' : 'bg-white text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-slate-500 font-medium leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-[#004b91] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-blue-600 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Bạn Cần Tư Vấn Ngay?</h2>
          <p className="text-xl md:text-2xl mb-14 text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
            Đừng để khó khăn tài chính cản bước bạn. Hãy liên hệ với chuyên viên Tiến để nhận giải pháp tốt nhất.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0987306837" 
              className="bg-white text-[#004b91] px-14 py-6 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all shadow-3xl shadow-black/20"
            >
              0987 306 837
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register" 
              className="bg-blue-600 text-white px-14 py-6 rounded-2xl font-black text-2xl hover:bg-blue-500 transition-all shadow-3xl shadow-black/20 border border-blue-400"
            >
              Đăng ký tư vấn
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <h3 className="text-2xl font-black tracking-tighter">TƯ VẤN TÀI CHÍNH</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Giải pháp tài chính cá nhân chuyên nghiệp, an toàn và minh bạch từ chuyên viên ngân hàng uy tín.
              </p>
              <div className="flex gap-4">
                {['facebook', 'linkedin', 'twitter'].map(social => (
                  <div key={social} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#004b91] transition-colors cursor-pointer">
                    <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-blue-400">Dịch vụ</h3>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#services" className="hover:text-white transition-colors">Vay theo lương</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Vay theo bảo hiểm y tế</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Vay theo hóa đơn điện</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Vay theo thẻ tín dụng</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-blue-400">Liên hệ</h3>
              <div className="space-y-5 text-slate-400 font-bold">
                <p className="flex items-center gap-3"><User size={18} className="text-blue-500" /> LU NGỌC MINH TIẾN</p>
                <p className="flex items-center gap-3"><Award size={18} className="text-blue-500" /> Shinhan Bank Việt Nam</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-blue-500" /> 0987 306 837</p>
                <p className="flex items-center gap-3"><MapPin size={18} className="text-blue-500" /> Hỗ trợ toàn quốc</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-blue-400">Bản tin</h3>
              <p className="text-slate-400 font-medium mb-6">Nhận thông tin về các gói ưu đãi tài chính mới nhất.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email của bạn" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 w-full font-bold" />
                <button className="bg-[#004b91] p-3 rounded-xl hover:bg-blue-600 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
            <p>© 2026 TƯ VẤN TÀI CHÍNH CÁ NHÂN | LU NGỌC MINH TIẾN</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Điều khoản</a>
              <a href="#" className="hover:text-white">Bảo mật</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <motion.a 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href="https://zalo.me/0987306837" 
          target="_blank"
          className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-3xl hover:bg-blue-600 transition-all group relative"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 px-4 py-2 bg-white text-blue-500 rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">Nhắn Zalo ngay</span>
        </motion.a>
        <motion.a 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href="tel:0987306837" 
          className="w-16 h-16 bg-[#004b91] text-white rounded-2xl flex items-center justify-center shadow-3xl hover:bg-blue-800 transition-all animate-bounce group relative"
        >
          <Phone size={32} />
          <span className="absolute right-full mr-4 px-4 py-2 bg-white text-[#004b91] rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">Gọi ngay tư vấn</span>
        </motion.a>
      </div>
    </div>
  );
}
