/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Car, 
  Phone, 
  CalendarDays, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Tag, 
  Star,
  Facebook,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'บริการ', href: '#services' },
    { name: 'รีวิว', href: '#reviews' },
    { name: 'ติดต่อ', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-primary-container'}`} />
          <span className={`font-display font-bold text-xl md:text-2xl ${isScrolled ? 'text-on-surface' : 'text-white drop-shadow-md'}`}>
            แท็กซี่ขอนแก่น.com
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-display font-semibold transition-colors ${isScrolled ? 'text-on-surface-variant hover:text-primary' : 'text-white hover:text-primary-container'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0886484277" 
            className="bg-primary-container hover:bg-white text-on-primary-container px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            088-648-4277
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8 text-on-surface" /> : <Menu className={`w-8 h-8 ${isScrolled ? 'text-on-surface' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl p-8 md:hidden flex flex-col items-center gap-6"
          >
            <div className="flex justify-between w-full mb-4">
               <span className="font-display font-bold text-xl text-primary">แท็กซี่ขอนแก่น.com</span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8 text-on-surface" /></button>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display font-semibold text-xl text-on-surface-variant hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:0886484277"
              className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
            >
              <Phone className="w-5 h-5" />
              โทรเลย: 088-648-4277
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Y5yN3VMzf2G4glnfSFuihJ7bZ-laS0x9p8YHcXLSSJYuBkiq8Jh1HjPrKqp3O7wwQd7eRHugoKeuzxdSJoDd085EMfhKm4rrvQnrsUmC1ymzFkdRc4W9gzIIQs5Av8MEYDhVvynt7ghI8CgSy5udLKlpHVEM01gaoBfhD839Pstvx75zKNemQTtveC01COyK8CeLPGgoJK3v1fbDse-tmvxbHutbbtlUvz8Ko0B4IyP1nULoraa6kXToNKbrpKWl8V4KVHj7eOg" 
          alt="Khon Kaen Taxi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-display font-semibold text-sm">
              อันดับ 1 ในขอนแก่น
            </span>
            <h1 className="text-white font-display font-bold text-5xl md:text-7xl leading-tight">
              แท็กซี่ขอนแก่น
            </h1>
            <p className="text-white/90 font-display font-semibold text-2xl md:text-3xl">
              รถใหม่ สะอาด ได้มาตรฐาน
            </p>
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
            บริการรถรับ-ส่งทั่วจังหวัดขอนแก่น และบริการเหมารถไปต่างจังหวัดทั่วไทย ด้วยทีมงานมืออาชีพ สุภาพ และปลอดภัยในทุกเส้นทาง โทร 0886484277
          </p>
          <div className="pt-4">
            <a 
              href="tel:0886484277"
              className="bg-primary text-white px-8 py-4 rounded-xl font-display font-bold text-xl shadow-lg shadow-primary/20 hover:scale-[1.05] transition-transform flex items-center justify-center gap-3 cursor-pointer inline-flex"
            >
              <Phone className="w-6 h-6" />
              จองล่วงหน้า
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceItems = [
    {
      title: 'รับ-ส่ง สนามบิน',
      desc: 'บริการรถรับ-ส่งสนามบินขอนแก่น ตรงเวลา ปลอดภัย ในราคามิเตอร์หรือราคาเหมาที่คุ้มค่า',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx8U1yLLl68tlagBGktnG5wcdFZB2hP7nD_oUdIOt-TaaRqnYGKxSFrflXZ8g1VDTAzGyuRiy1yfNHM5cslPvjA4Kv2TYWbNANwgarbU2nfBQsdo0dlkv6RnvvrNmaHN6-b0JahbseUmV44RwY_69J9ACzx43FKOWYci-bNlOonNGIJnZywaR5CNcu2Z-XlSl6OoNzEjDAiDfwuSVPJnK6_JWv4MkH2GHF3-vSIdtZ8h_xPtf9W1O8Ifi0mVYvFB3-mtkBqGBabK0',
    },
    {
      title: 'เหมารถต่างจังหวัด',
      desc: 'ท่องเที่ยวหรือทำธุระทั่วไทย ด้วยรถสภาพใหม่ คนขับเชี่ยวชาญเส้นทาง ตกลงราคาก่อนเดินทาง',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0x8yMs-CCOxNuqYrm6_0EjRucAIfGP4Eor30tW4Njr6hx6biP8jzPM2H3lrqor0Z1xGCLy601kMRBaTzMZMcYyM6-Sz8wluFbHwA7Ao8IGhkEjca-Y0VVOB0MZhABVWZj2wX6hyix4DGBubgohT92L_WZ09rEamiy77AZRNPpgU2mwvebXjNT9Q9vVvJwveoE-bQgv4XnYQVao4fEikc48NFxYfTjR_lgHAs0h7kgeBkq0HXX0wEhA31-B2touJ-X3Zw0Ot7pAqE',
    },
    {
      title: 'รถนำเที่ยว VIP',
      desc: 'ยกระดับการเดินทางด้วยรถ VIP ตกแต่งหรูหรา นั่งสบาย เหมาะสำหรับการรับรองแขกคนสำคัญ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cVDeyIMdcL_hwbyuB949deqZnN3C-1LMB8lvoNe-ls4Kg_o8NDy1zBukuq1CNzPBoLcuJGI9bgvIj8KPIztwN7KzWwPwW8uPv2zef6GjCBzI3-tDcEiaAB9gAzm_lqdBOuR_-RrMv6kD7H6__JRg4KoFzK5EG4t_GyN5p1YNvOy-yzzDCbWObXqLVgsCaOlSOXEsOTcOP9rr0xcSKwlzt62eOcx1GTsL_GNRp57iZjaYopjtv57D8eC-dLqIsOSTowV_T-X3tg4',
    },
    {
      title: 'จองล่วงหน้า / โรงแรม',
      desc: 'สะดวกสบายกับการจองรถล่วงหน้า รับ-ส่งถึงหน้าประตูโรงแรม ไม่ต้องรอคิว มั่นใจมีรถแน่นอน',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jzJMytSKymnWSnlscJXxw2ygH_zZdrMw_6p_x83wYh4BmIWFARitjJKGerbdlMbfyb1MTstXzTlM6LTVoPFcgMnAPj0QJZVTGMK_HKdLUI9geEJZRELD3P3qJ1J8-xZO-ZIwW8FVl9Z_InER99o-_8GC_zkcUSoZt-GL5SIsnUChPyDiRoU-9uNL8GIAuQ8MR4pdi17-g5fPmHfsnITKX814FUpWyi8W6irbnqlt8oSBu7nEsQ7TYYUS6aeoU_txYpVv9gOoTBU',
    },
  ];

  return (
    <section id="services" className="bg-white py-section-padding">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface">บริการของเรา</h2>
          <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <h3 className="font-display font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-white/80 text-md mb-4 max-w-sm">{item.desc}</p>
                <div className="flex items-center gap-2 text-primary-container font-bold group-hover:gap-4 transition-all">
                   <span className="text-sm">ดูรายละเอียด</span>
                   <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const points = [
    {
      id: '01',
      title: 'คนขับผ่านการตรวจประวัติ',
      desc: 'คัดกรองพนักงานขับรถอย่างเข้มงวด มั่นใจในความสุภาพ การขับขี่ที่ปลอดภัย และประวัติที่ขาวสะอาดเพื่อความสบายใจสูงสุดของท่าน',
    },
    {
      id: '02',
      title: 'GPS ติดตามรถ 24 ชม.',
      desc: 'รถทุกคันติดตั้งระบบ GPS มาตรฐานสากล ตรวจสอบพิกัดและความเร็วได้ตลอดเวลาผ่านศูนย์ควบคุม มั่นใจได้ในความปลอดภัยทุกเส้นทาง',
    },
    {
      id: '03',
      title: 'ราคาโปร่งใส ไม่บวกเพิ่ม',
      desc: 'ตกลงอัตราค่าบริการล่วงหน้าตามระยะทางจริง ไม่มีค่าธรรมเนียมแอบแฝง ให้คุณวางแผนการเดินทางและงบประมาณได้อย่างแม่นยำ',
    },
  ];

  return (
    <section className="bg-white py-section-padding overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface">มั่นใจเมื่อใช้บริการ</h2>
          <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {points.map((point) => (
              <motion.div 
                key={point.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="font-display font-bold text-primary text-2xl">{point.id}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-on-surface text-2xl">{point.title}</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute w-[120%] h-[120%] bg-primary-container/20 rounded-full blur-3xl -z-10" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFjZlG2LhdDMJvPuKRGWw0uF10O7AxUzcwf4IZNuG3hkagvyYnMaBUTUVIyRtHrI0qduqvg4Vw2RD2nrPmPdpEo5bemqBvq8WIQe4vb5PTDVxPnIs5WrIDzx06O61ZQ7gLGQxowmkqMFKsrlgMp98SaIH9gVx8QSpYkp9TuuCpc3_oyKtXG_wjxPOpmnll4BKhvlG5qZOf7TdKkZG3ZAODGPH65vq-bPfY2oic5aYIkaLmRIHC8ocqxwUjcvVDsjwxqAmo-93b_Vw" 
              alt="Booking App" 
              className="w-full max-w-[500px] rounded-[3rem] shadow-2xl hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF57Sc_PYt_2VkE9kGAS9NQ0WGE_C9H-GffkYFRLJaYM_Hw75arezStN2YHWcVT-MJHvmqFCsoDXaLhcos0glIGlxKs0fnGb8kzAl1JFZHw_st-iCf6UNgHtE6PpTrsRt2CPNTFb5VqWp9imZaw2-RMRKkd7HGPk8U0ZP3VeoFLzJkyebA54ir57a5e7FCufG1eJw2J-0GkZh_TjedzKe1IzUpJiMvyk5N5WFna8oJyhSThjE4CVz-1CqNaG9aOWGW03639NWbdM0',
      text: 'คนขับสุภาพมากค่ะ รถสะอาดและตรงเวลามาก',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzbji8v5-mSLiY3bQPTb5-7Ly-N2j0f4Q62cvBVuefxDYnWB8zq5SBqiiHE6PfNsqjy6c-XS8twN4FEm5v5qe7RXVVLD9O6maNqacRm4dC3Xv5w5nuwdjaRyeOV7mTHxEdYQ2gzdWocX-0HynC65Wf3hm2Y1NY4l5JiSlEyD6WhfcTZ8TE10VEzdHBAMO27yUoiWpylJaZe4LK7JRyZGOY1JC6DMy34qYocRCLIiLaEzM8yi6aoa-ZrrbeLx2hzoQgLtRXPZPxcyQ',
      text: 'บริการประทับใจ จองง่าย สะดวกรวดเร็วครับ',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwXE9KFkDI_mp-y9DnOZtZgd_eI8CUjHnzFPCzrIyL-34z0l1rgtvum0usKFb_hgeYGmYaRHGhT6CYRBg_6G5AUpYfYtar93T339vVR9XwsZJO-TUo_QNrPXWz5w02nKhjdSd7cIY9RTx6LmRyq7miMP0CUHBs4HtYJWpRnXeyIGVcCWzCyZkuieHMSqcuZ-IqfQsgOJNVaW5lxvI5zQb3InSVgDAwUPP4k6MkKbKz_37Npg9M1O7QWMveDsYkOkfvKYE8Cfjxb7U',
      text: 'ไปสนามบินไม่เคยต้องกังวลเลยค่ะ แนะนำเลย',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApOfx5WwGwa0Ax8d9oCz5TdF4bi-thEILPxI1FzmewjxSxKLvN-jX0Fcb-8GqQBM_UOzwVibB9o_AZ1UxPjlHEzdrT0ai1gRT2opT0estnLVjT9z3dEzIwGXi7lietjwoDlUnyREkeeSpMt7G-3kxWkE9R2bvXxyDl3cFpfnLA1w5sw5ed7-AoWo89hpT9cJS8-V3lRpFyH5411Goc_tgiFJF6-VOBzNgxP4U_eCkFFKkmfCjSxJnNQi7Hjz7tOq4hwUPbCYa679A',
      text: 'เหมารถไปต่างจังหวัดราคาเป็นกันเองมากครับ',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUfhZtrXJgPnGKfztUJ9nBcmSKf1AHGdndS87tp9iWHpKofUh-Ef8NifwtwrXYFZCzr6Eic1cP0h16fJZBbVTu8hBicZVNF_ZO0KnjGxVwqz8xLL3gwf0k68Vzyn--PfUUzZZReLz-dsV3swD7mGB6419DmCQ16Uv4XaqQ2Tvbz1NXqmHRw3qz8w28OZc7yiUha6GBV8autVWXo2xhXtbq7Hj3maQvAPE6eLpwBpKwKDyIHDRJleqefzZGgApy4tcriJMkswioiMU',
      text: 'ปลอดภัยทุกเส้นทาง รถใหม่นั่งสบายจริงๆ',
    },
  ];

  return (
    <section id="reviews" className="bg-surface-container-low py-section-padding">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface">รีวิวจากลูกค้า</h2>
          <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
          <p className="text-on-surface-variant text-lg">ความประทับใจจริงจากลูกค้าผู้ใช้บริการ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/10 flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={review.img} alt={`Review ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex text-[#ffd700]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-on-surface italic text-sm leading-relaxed">"{review.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { val: '500+', label: 'คนขับมืออาชีพ', color: 'text-primary' },
    { val: '24/7', label: 'ให้บริการตลอดเวลา', color: 'text-secondary' },
    { val: '10k+', label: 'ทริปที่สำเร็จ', color: 'text-primary' },
    { val: '4.9/5', label: 'คะแนนความพึงพอใจ', color: 'text-secondary' },
  ];

  return (
    <section className="bg-white py-20 border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className={`font-display font-bold text-4xl md:text-5xl ${stat.color}`}>{stat.val}</p>
              <p className="text-on-surface-variant font-semibold text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-container-highest py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2">
              <Car className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl text-on-surface">แท็กซี่ขอนแก่น.com</span>
            </div>
            <p className="text-on-surface-variant text-sm">© 2024 แท็กซี่ขอนแก่น บริการประทับใจ ปลอดภัยทุกเส้นทาง</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">เงื่อนไขการใช้บริการ</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">ติดต่อเรา</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="tel:0886484277"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform cursor-pointer"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a 
              href="https://linevoom.line.me/user/_dT6zpt3j5x2wQ3sUSjoke3nY2dB1mU22dJG_5RM"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" 
                alt="Line" 
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      <motion.a 
        href="https://linevoom.line.me/user/_dT6zpt3j5x2wQ3sUSjoke3nY2dB1mU22dJG_5RM"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-[1.25rem] overflow-hidden shadow-2xl"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" 
          alt="Line" 
          className="w-full h-full object-cover"
        />
      </motion.a>
      <motion.a 
        href="tel:0886484277"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone className="w-8 h-8" />
      </motion.a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased text-on-surface scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Reviews />
        <Stats />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
