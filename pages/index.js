import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ChevronRight, Check, Star, Users, TrendingUp, Award, Globe, Clock, DollarSign, Target } from 'lucide-react';

export default function DigiGrowthAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [bookingData, setBookingData] = useState({ name: '', email: '', date: '', time: '', service: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      alert('Successfully subscribed! Check your email for confirmation.');
      setNewsletterEmail('');
    } else {
      alert('Please enter your email');
    }
  };

  const handleBooking = () => {
    if (bookingData.name && bookingData.email && bookingData.date && bookingData.service) {
      alert('Consultation booked successfully! We will send you a confirmation email.');
      setBookingData({ name: '', email: '', date: '', time: '', service: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              DigiGrowth Agency
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'services', 'portfolio', 'case-studies', 'testimonials', 'blog', 'news', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm hover:text-blue-600 transition ${
                    activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'services', 'portfolio', 'case-studies', 'testimonials', 'blog', 'news', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empower Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Transform Your Business with Data-Driven Marketing Strategies
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
            Leading digital marketing agency in Bangladesh, helping businesses grow with SEO, social media marketing, content creation, and web development services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center shadow-lg"
            >
              Get Free Consultation <ChevronRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition inline-flex items-center"
            >
              View Our Work
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Done</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">About DigiGrowth Agency</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your trusted partner in digital transformation since 2017
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses of all sizes with innovative digital marketing solutions that drive measurable growth, enhance brand visibility, and create meaningful connections with their target audiences through data-driven strategies and creative excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading digital marketing agency in South Asia by 2027, recognized for transforming businesses through cutting-edge marketing strategies, exceptional client results, and pioneering innovative approaches that set industry standards.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Target Audience</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Users className="mx-auto mb-3 text-blue-600" size={40} />
                  <p className="font-semibold text-gray-800 mb-2">Age Group</p>
                  <p className="text-gray-600">25-45 years</p>
                  <p className="text-sm text-gray-500 mt-1">Business owners, marketers, entrepreneurs</p>
                </div>
                <div className="text-center">
                  <Globe className="mx-auto mb-3 text-blue-600" size={40} />
                  <p className="font-semibold text-gray-800 mb-2">Location</p>
                  <p className="text-gray-600">Bangladesh & South Asia</p>
                  <p className="text-sm text-gray-500 mt-1">Dhaka, Chittagong, regional businesses</p>
                </div>
                <div className="text-center">
                  <Star className="mx-auto mb-3 text-blue-600" size={40} />
                  <p className="font-semibold text-gray-800 mb-2">Interests</p>
                  <p className="text-gray-600">Digital Growth</p>
                  <p className="text-sm text-gray-500 mt-1">Online marketing, brand building, sales</p>
                </div>
                <div className="text-center">
                  <Award className="mx-auto mb-3 text-blue-600" size={40} />
                  <p className="font-semibold text-gray-800 mb-2">Sectors</p>
                  <p className="text-gray-600">SMEs, Startups</p>
                  <p className="text-sm text-gray-500 mt-1">E-commerce, retail, B2B services</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-center">What Makes Us Different (Our USP)</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <h4 className="font-bold mb-2">AI-Powered Analytics</h4>
                  <p className="text-blue-100 text-sm">Advanced data analysis combined with creative storytelling for campaigns that perform exceptionally</p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Certified Experts</h4>
                  <p className="text-blue-100 text-sm">Team of Google and Facebook certified professionals with 8+ years experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Guaranteed ROI</h4>
                  <p className="text-blue-100 text-sm">Transparent reporting with measurable results - average 350% ROI for our clients</p>
                </div>
              </div>
            </div>

            {/* Industry Info */}
            <div className="bg-white p-8 rounded-lg shadow-lg mt-8 text-center">
              <p className="text-gray-600 mb-2">Industry</p>
              <h3 className="text-2xl font-bold text-blue-600">Digital Marketing & Advertising Services</h3>
              <p className="text-gray-700 mt-4">Specializing in SEO, Social Media Marketing, Content Creation, Web Development, and Paid Advertising</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Instagram size={32} />,
                title: 'Social Media Marketing',
                desc: 'Build engaged communities and amplify your brand presence across all major platforms with data-driven content strategies.',
                features: ['Content Creation & Scheduling', 'Community Management', 'Paid Social Advertising', 'Analytics & Reporting'],
                action: 'Grow Your Social Presence'
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'SEO Optimization',
                desc: 'Dominate search rankings and drive organic traffic with our proven SEO strategies and technical expertise.',
                features: ['Keyword Research & Strategy', 'On-Page & Technical SEO', 'Link Building Campaigns', 'Local SEO Optimization'],
                action: 'Rank Higher on Google'
              },
              {
                icon: <Globe size={32} />,
                title: 'Content Marketing',
                desc: 'Engage your audience with compelling content that educates, entertains, and converts into loyal customers.',
                features: ['Blog Writing & Articles', 'Video Production', 'Infographics & Visuals', 'E-books & White Papers'],
                action: 'Create Compelling Content'
              },
              {
                icon: <Mail size={32} />,
                title: 'Email Marketing',
                desc: 'Nurture leads and retain customers with personalized email campaigns that deliver impressive ROI.',
                features: ['Campaign Design & Strategy', 'Marketing Automation', 'List Segmentation', 'A/B Testing & Optimization'],
                action: 'Boost Email Conversions'
              },
              {
                icon: <DollarSign size={32} />,
                title: 'PPC Advertising',
                desc: 'Maximize your ad spend with targeted campaigns on Google Ads, Facebook, Instagram and other platforms.',
                features: ['Campaign Setup & Management', 'Bid Optimization', 'Ad Copywriting & Design', 'Conversion Tracking'],
                action: 'Start Paid Campaigns'
              },
              {
                icon: <Award size={32} />,
                title: 'Web Design & Development',
                desc: 'Create stunning, conversion-optimized websites that provide exceptional user experiences and drive sales.',
                features: ['Responsive Web Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
                action: 'Build Your Website'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                >
                  {service.action} <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">We Rank For These Keywords</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['digital marketing agency Bangladesh', 'SEO services Dhaka', 'social media marketing', 'content marketing agency', 'web design Bangladesh', 'Google Ads expert', 'Facebook marketing', 'best digital agency Dhaka', 'online marketing services', 'brand strategy consultant'].map((keyword, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Our Portfolio</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Showcasing our best work and successful campaigns for diverse clients across industries
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'E-commerce Growth Campaign',
                client: 'FashionHub BD',
                type: 'Social Media & SEO',
                result: '300% increase in online sales',
                duration: '6 months',
                color: 'from-purple-400 to-purple-600'
              },
              {
                title: 'Brand Launch Strategy',
                client: 'TechStart Solutions',
                type: 'Full Digital Marketing',
                result: '50K+ engaged followers in 3 months',
                duration: '3 months',
                color: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Local Business Visibility',
                client: 'Cafe Aroma',
                type: 'Local SEO & Google Ads',
                result: 'Ranked #1 for local searches',
                duration: '4 months',
                color: 'from-green-400 to-green-600'
              },
              {
                title: 'Content Marketing Success',
                client: 'HealthPlus Clinic',
                type: 'Blog & Video Content',
                result: '500% increase in organic traffic',
                duration: '8 months',
                color: 'from-red-400 to-red-600'
              },
              {
                title: 'Social Media Transformation',
                client: 'FitLife Gym',
                type: 'Instagram & Facebook Marketing',
                result: '200+ new memberships',
                duration: '5 months',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Website Redesign Project',
                client: 'Legal Associates',
                type: 'Web Design & Development',
                result: '85% improvement in conversion rate',
                duration: '3 months',
                color: 'from-indigo-400 to-indigo-600'
              },
              {
                title: 'Email Campaign Strategy',
                client: 'BookStore BD',
                type: 'Email Marketing Automation',
                result: '45% open rate, 12% CTR',
                duration: '6 months',
                color: 'from-pink-400 to-pink-600'
              },
              {
                title: 'PPC Advertising Success',
                client: 'HomeDecor Pro',
                type: 'Google Ads & Facebook Ads',
                result: '400% ROI on ad spend',
                duration: '4 months',
                color: 'from-yellow-400 to-yellow-600'
              },
              {
                title: 'Brand Awareness Campaign',
                client: 'GreenEarth NGO',
                type: 'Social Media & Content',
                result: '100K+ campaign reach',
                duration: '2 months',
                color: 'from-teal-400 to-teal-600'
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white relative`}>
                  <div className="text-center z-10">
                    <Award size={48} className="mx-auto mb-2" />
                    <p className="text-2xl font-bold">{project.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-sm text-blue-600 mb-2 font-semibold">{project.type}</p>
                  <p className="text-gray-700 font-semibold mb-2">{project.result}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center"
            >
              Start Your Project <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Case Studies</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real results from real clients - Deep dive into our most successful campaigns
          </p>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {[
              {
                client: 'BoutiqueStyle - Fashion E-commerce',
                industry: 'Fashion & Retail',
                challenge: 'Low online visibility and minimal social media engagement with only 500 monthly website visitors. Struggling to compete with established fashion brands in the Bangladesh market.',
                solution: 'Implemented comprehensive SEO strategy with keyword optimization, created engaging social media content calendar across Instagram and Facebook, launched targeted advertising campaigns with lookalike audiences, and optimized website for conversions with improved UX design.',
                timeline: '6 months',
                investment: '$5,000',
                results: [
                  'Website traffic increased from 500 to 15,000 monthly visitors',
                  'Social media followers grew from 2,000 to 10,000 (400% increase)',
                  'Online sales increased by 320% with average order value up 45%',
                  'ROI of 450% on ad spend with ROAS of 4.5x',
                  'Email list grew to 8,000 subscribers with 35% open rate'
                ]
              },
              {
                client: 'GreenLeaf Organic Foods',
                industry: 'Food & Beverage',
                challenge: 'New brand with zero market presence competing against established organic food brands. Limited marketing budget and need to build trust quickly in a skeptical market.',
                solution: 'Developed comprehensive brand identity and storytelling approach highlighting farm-to-table journey, created educational content marketing strategy with weekly blog posts and videos, built engaged community through social media with user-generated content, implemented influencer partnerships with health and wellness creators.',
                timeline: '8 months',
                investment: '$7,500',
                results: [
                  'Built community of 25,000+ engaged followers across platforms',
                  'Generated 5,000+ email subscribers with 42% open rate',
                  'Achieved 95% brand awareness in target market (verified survey)',
                  'Secured partnerships with 15 retail stores and 3 supermarket chains',
                  'Monthly revenue grew from $0 to $50,000 in 8 months'
                ]
              },
              {
                client: 'SmartHome Technologies - B2B SaaS',
                industry: 'Technology & IoT',
                challenge: 'Complex B2B product requiring education of potential customers about smart home solutions. Long sales cycle and difficulty reaching decision-makers in corporate sector.',
                solution: 'Created comprehensive video tutorial series explaining products simply, developed SEO-optimized blog content targeting technical keywords, implemented LinkedIn marketing strategy with sponsored content, launched Google Ads campaign targeting C-level executives and facility managers.',
                timeline: '10 months',
                investment: '$12,000',
                results: [
                  'Generated 200+ qualified B2B leads monthly (20x increase)',
                  'Reduced cost per lead by 60% from $150 to $60',
                  'Increased demo requests by 250% with 35% conversion rate',
                  'Closed 45 enterprise deals worth $2M+ in total revenue',
                  'Established thought leadership with 50,000+ blog readers monthly'
                ]
              },
              {
                client: 'DriveSchool Pro - Education Services',
                industry: 'Education & Training',
                challenge: 'Seasonal business with low enrollment during off-peak months. Heavy competition from 50+ driving schools in Dhaka. No online presence or booking system.',
                solution: 'Built modern website with online booking system, implemented local SEO strategy to dominate map searches, created Google Ads campaigns targeting specific locations, launched Facebook campaigns with video testimonials from successful students.',
                timeline: '5 months',
                investment: '$4,000',
                results: [
                  'Ranked #1 on Google Maps for "driving school Dhaka"',
                  'Online bookings increased from 0 to 150+ per month',
                  'Overall enrollment increased by 180% year-over-year',
                  'Reduced marketing costs by 40% while increasing leads',
                  'Student satisfaction rating improved to 4.8/5 stars'
                ]
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-blue-600">{study.client}</h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">{study.industry}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 text-blue-600" size={20} />
                    <span><strong>Timeline:</strong> {study.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="mr-2 text-blue-600" size={20} />
                    <span><strong>Investment:</strong> {study.investment}</span>
                  </div>
                </div>

                <div className="mb-6 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <X className="mr-2 text-red-500" size={20} />
                    The Challenge
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>
                
                <div className="mb-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <TrendingUp className="mr-2 text-blue-500" size={20} />
                    Our Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Check className="mr-2 text-green-500" size={20} />
                    Measurable Results
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start">
                        <Star size={18} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Want similar results for your business?</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center"
            >
              Get Your Free Strategy Session <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Client Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear what our satisfied clients say about working with us
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah Ahmed',
                title: 'CEO, FashionHub BD',
                image: 'SA',
                rating: 5,
                text: 'DigiGrowth transformed our online presence completely. Within 6 months, our sales tripled and our social media engagement skyrocketed. Their team is professional, creative, and truly understands the Bangladesh market.'
              },
              {
                name: 'Mohammad Karim',
                title: 'Founder, TechStart Solutions',
                image: 'MK',
                rating: 5,
                text: 'Best digital marketing agency in Dhaka! They helped us launch our brand from zero to 50,000 followers. The ROI has been incredible. Highly recommend their social media and content marketing services.'
              },
              {
                name: 'Dr. Fatima Rahman',
                title: 'Director, HealthPlus Clinic',
                image: 'FR',
                rating: 5,
                text: 'Our website traffic increased by 500% thanks to their SEO expertise. The content they created is engaging and brings us qualified leads. Their analytics reports are detailed and actionable.'
              },
              {
                name: 'Rafiq Hassan',
                title: 'Owner, Cafe Aroma',
                image: 'RH',
                rating: 5,
                text: 'We now rank #1 on Google for local searches in our area. The Google Ads campaign they set up brings us customers daily. Our revenue has doubled since working with DigiGrowth Agency.'
              },
              {
                name: 'Aminul Islam',
                title: 'Marketing Manager, GreenLeaf Foods',
                image: 'AI',
                rating: 5,
                text: 'They helped us build our brand from scratch. The influencer partnerships and content strategy they developed created genuine engagement. Now we have partnerships with major retail chains!'
              },
              {
                name: 'Nadia Chowdhury',
                title: 'Owner, FitLife Gym',
                image: 'NC',
                rating: 5,
                text: 'The social media campaigns brought us 200+ new members in just 5 months. Their creative content and targeted ads work incredibly well. Best investment we made for our business.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Latest from Our Blog</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Expert insights, tips, and trends in digital marketing to help you grow your business
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '10 SEO Trends to Watch in 2025',
                category: 'SEO',
                date: 'October 1, 2025',
                author: 'Mehedi Hasan',
                readTime: '8 min read',
                excerpt: 'Stay ahead of the curve with these emerging SEO strategies that will dominate search rankings in the coming year. Learn about AI-powered search, voice optimization, and Core Web Vitals.',
                tags: ['SEO', 'Google', 'Rankings']
              },
              {
                title: 'Mastering Social Media Algorithms in 2025',
                category: 'Social Media',
                date: 'September 28, 2025',
                author: 'Tasnim Ahmed',
                readTime: '6 min read',
                excerpt: 'Learn how to work with platform algorithms to maximize your content reach and engagement rates. Discover the latest updates to Instagram, Facebook, and TikTok algorithms.',
                tags: ['Social Media', 'Algorithm', 'Engagement']
              },
              {
                title: 'The Complete Guide to Content Marketing ROI',
                category: 'Content Marketing',
                date: 'September 25, 2025',
                author: 'Rafiq Hossain',
                readTime: '10 min read',
                excerpt: 'Discover how to measure and improve the return on investment from your content marketing efforts. Includes case studies, metrics to track, and optimization strategies.',
                tags: ['Content', 'ROI', 'Marketing']
              },
              {
                title: 'Email Marketing Best Practices for 2025',
                category: 'Email Marketing',
                date: 'September 20, 2025',
                author: 'Sabrina Khan',
                readTime: '7 min read',
                excerpt: 'Learn how to create high-converting email campaigns with personalization, automation, and A/B testing. Includes templates and real campaign examples.',
                tags: ['Email', 'Conversion', 'Automation']
              },
              {
                title: 'Facebook Ads vs Google Ads: Which is Better?',
                category: 'Paid Advertising',
                date: 'September 15, 2025',
                author: 'Kamal Uddin',
                readTime: '9 min read',
                excerpt: 'A comprehensive comparison of the two biggest advertising platforms. Learn when to use each platform based on your business goals and target audience.',
                tags: ['PPC', 'Facebook Ads', 'Google Ads']
              },
              {
                title: 'Building a Brand on Instagram in Bangladesh',
                category: 'Social Media',
                date: 'September 10, 2025',
                author: 'Nusrat Jahan',
                readTime: '5 min read',
                excerpt: 'Step-by-step guide to growing your Instagram presence in the Bangladesh market. Includes content strategies, hashtag research, and influencer collaboration tips.',
                tags: ['Instagram', 'Branding', 'Bangladesh']
              }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 flex items-center justify-center">
                  <Globe size={64} className="text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.date} • By {post.author}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                    Read Full Article <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Latest News & Updates</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay updated with our latest achievements, partnerships, and industry news
          </p>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                date: 'October 2, 2025',
                type: 'Award',
                title: 'DigiGrowth Named Best Digital Marketing Agency in Bangladesh 2025',
                content: 'We are thrilled to announce that DigiGrowth Agency has been awarded "Best Digital Marketing Agency in Bangladesh 2025" by the Bangladesh Digital Marketing Association. This recognition reflects our commitment to delivering exceptional results for our clients.',
                color: 'bg-yellow-100 border-yellow-500 text-yellow-800'
              },
              {
                date: 'September 25, 2025',
                type: 'Partnership',
                title: 'New Partnership with Google for Advanced Analytics Training',
                content: 'DigiGrowth Agency is now an official Google Partner, giving our clients access to advanced analytics tools and beta features. Our team has completed Google Analytics 4 certification and advanced training programs.',
                color: 'bg-blue-100 border-blue-500 text-blue-800'
              },
              {
                date: 'September 15, 2025',
                type: 'Milestone',
                title: 'Celebrating 500+ Happy Clients and 1000+ Successful Projects',
                content: 'We have reached an incredible milestone - over 500 satisfied clients and 1000+ successfully completed projects since our founding in 2017. Thank you to all our clients for trusting us with their digital marketing needs.',
                color: 'bg-green-100 border-green-500 text-green-800'
              },
              {
                date: 'September 1, 2025',
                type: 'Team',
                title: 'Expanding Our Team: Now Hiring Senior Social Media Strategists',
                content: 'Due to growing demand, we are expanding our team! We are looking for talented social media strategists, content creators, and SEO specialists to join our award-winning agency. Check our careers page for open positions.',
                color: 'bg-purple-100 border-purple-500 text-purple-800'
              },
              {
                date: 'August 20, 2025',
                type: 'Event',
                title: 'Free Digital Marketing Workshop for SMEs - Register Now',
                content: 'Join us for a free half-day workshop on "Digital Marketing Essentials for Small Businesses" on October 15th at our Dhaka office. Limited seats available. Learn SEO basics, social media strategies, and more.',
                color: 'bg-red-100 border-red-500 text-red-800'
              },
              {
                date: 'August 10, 2025',
                type: 'Achievement',
                title: 'Our Client Wins National E-commerce Award',
                content: 'Congratulations to our client FashionHub BD for winning the National E-commerce Excellence Award 2025! We are proud to have contributed to their success through our comprehensive digital marketing campaigns.',
                color: 'bg-indigo-100 border-indigo-500 text-indigo-800'
              }
            ].map((news, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-blue-500">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {news.date}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${news.color}`}>
                    {news.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{news.title}</h3>
                <p className="text-gray-700 leading-relaxed">{news.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <Mail size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Get the latest digital marketing tips, industry insights, and exclusive offers delivered to your inbox every week. Join 10,000+ marketers who trust our content.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button 
                onClick={handleNewsletterSubmit} 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Booking/Appointment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Book a Free Consultation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Schedule a 30-minute strategy session with our digital marketing experts. No commitment required.
          </p>
          
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                <select
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select time slot</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Service Interested In *</label>
                <select
                  value={bookingData.service}
                  onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="SEO">SEO Optimization</option>
                  <option value="Social Media">Social Media Marketing</option>
                  <option value="Content">Content Marketing</option>
                  <option value="PPC">PPC Advertising</option>
                  <option value="Email">Email Marketing</option>
                  <option value="Web">Web Design & Development</option>
                  <option value="All">Complete Digital Marketing</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={handleBooking}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition mt-6 flex items-center justify-center"
            >
              <Clock size={20} className="mr-2" />
              Book Your Free Consultation
            </button>
            <p className="text-center text-sm text-gray-600 mt-3">
              You'll receive a confirmation email with meeting details within 1 hour
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to grow your business? Contact us today for a free digital marketing consultation
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-lg shadow">
                  <MapPin className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Head Office</p>
                    <p className="text-gray-600">House 45, Road 12, Dhanmondi</p>
                    <p className="text-gray-600">Dhaka 1209, Bangladesh</p>
                    <p className="text-sm text-gray-500 mt-2">Open: Sun-Thu, 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-lg shadow">
                  <Phone className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Phone Numbers</p>
                    <p className="text-gray-600">+880 1712-345678 (Sales)</p>
                    <p className="text-gray-600">+880 2-9876543 (Support)</p>
                    <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-lg shadow">
                  <Mail className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Addresses</p>
                    <p className="text-gray-600">info@digigrowth.com</p>
                    <p className="text-gray-600">hello@digigrowth.com</p>
                    <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-800 mb-4">Connect With Us</p>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110">
                    <Facebook size={20} />
                  </button>
                  <button className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition transform hover:scale-110">
                    <Instagram size={20} />
                  </button>
                  <button className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition transform hover:scale-110">
                    <Linkedin size={20} />
                  </button>
                  <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition transform hover:scale-110">
                    <Twitter size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Follow us for daily marketing tips, industry news, and success stories
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="SEO">SEO Optimization</option>
                      <option value="Social Media">Social Media Marketing</option>
                      <option value="Content">Content Marketing</option>
                      <option value="Email">Email Marketing</option>
                      <option value="PPC">PPC Advertising</option>
                      <option value="Web">Web Design & Development</option>
                      <option value="All">Complete Digital Marketing Package</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
                  >
                    <Mail size={20} className="mr-2" />
                    Send Message
                  </button>
                  
                  <p className="text-center text-sm text-gray-600">
                    We'll respond within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">DigiGrowth Agency</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for digital marketing excellence and business growth in Bangladesh since 2017.
              </p>
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                  <Facebook size={18} />
                </button>
                <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition">
                  <Instagram size={18} />
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
                  <Linkedin size={18} />
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition">
                  <Twitter size={18} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition">Blog</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition">Social Media Marketing</li>
                <li className="hover:text-white transition">SEO Optimization</li>
                <li className="hover:text-white transition">Content Marketing</li>
                <li className="hover:text-white transition">Email Marketing</li>
                <li className="hover:text-white transition">PPC Advertising</li>
                <li className="hover:text-white transition">Web Development</li>
                <li className="hover:text-white transition">Brand Strategy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal & Policies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition">Privacy Policy</button></li>
                <li><button className="hover:text-white transition">Terms of Service</button></li>
                <li><button className="hover:text-white transition">Cookie Policy</button></li>
                <li><button className="hover:text-white transition">GDPR Compliance</button></li>
                <li><button className="hover:text-white transition">Refund Policy</button></li>
                <li><button className="hover:text-white transition">Data Protection</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-semibold mb-2 text-blue-400">Contact Information</h5>
                <p className="text-gray-400 text-sm">House 45, Road 12, Dhanmondi, Dhaka 1209</p>
                <p className="text-gray-400 text-sm">Phone: +880 1712-345678</p>
                <p className="text-gray-400 text-sm">Email: info@digigrowth.com</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-blue-400">Business Hours</h5>
                <p className="text-gray-400 text-sm">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-sm">Friday - Saturday: Closed</p>
                <p className="text-gray-400 text-sm">Emergency Support: Available 24/7</p>
              </div>
            </div>
            
            <div className="text-center text-gray-400 border-t border-gray-800 pt-6">
              <p className="mb-2">&copy; 2025 DigiGrowth Agency. All rights reserved.</p>
              <p className="text-sm">Powered by innovation and dedication | Registered in Bangladesh</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs">
                <span className="flex items-center">
                  <Check size={14} className="mr-1 text-green-500" />
                  SSL Secured
                </span>
                <span className="flex items-center">
                  <Check size={14} className="mr-1 text-green-500" />
                  GDPR Compliant
                </span>
                <span className="flex items-center">
                  <Check size={14} className="mr-1 text-green-500" />
                  Accessible Website
                </span>
                <span className="flex items-center">
                  <Check size={14} className="mr-1 text-green-500" />
                  Google Analytics Enabled
                </span>
                <span className="flex items-center">
                  <Check size={14} className="mr-1 text-green-500" />
                  ISO Certified
                </span>
              </div>
              <p className="text-xs mt-4 text-gray-500">
                Domain: www.digigrowth.com | Hosted on secure servers | All transactions encrypted
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
