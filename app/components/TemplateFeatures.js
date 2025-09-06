'use client';

import { useEffect, useState } from 'react';
import { 
  Zap, 
  LayoutTemplate, 
  Grid3X3, 
  SlidersHorizontal, 
  ShieldCheck, 
  TrendingUp,
  BarChart3,
  Megaphone,
  Users
} from 'lucide-react';

const TemplateFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate progress bars on component mount
    const timer = setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach(bar => {
        const targetWidth = bar.dataset.width;
        if (targetWidth) {
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth + '%';
          }, 100);
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: "High Conversion Rate",
      description: "MVP achieved a 4% conversion rate, exceeding initial goals",
      metric: "4%",
      metricLabel: "conversion rate",
      progress: 100,
      progressLabel: "33% above initial targets",
      colorClass: "indigo",
      delay: 0.6
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Integrated with CRM to capture leads and track performance",
      metric: "100%",
      metricLabel: "CRM integration",
      badges: ["Lead Capture", "Performance Tracking"],
      extraLabel: "Seamless marketing automation",
      colorClass: "indigo",
      delay: 0.7
    },
    {
      icon: Users,
      title: "Scalable Solution",
      description: "189 program pages were built by 20+ project managers",
      metric: "189",
      metricLabel: "pages built",
      features: ["20+ Project Managers", "Multi-team Collaboration", "Distributed Workflow"],
      colorClass: "indigo",
      delay: 0.8
    },
    {
      icon: Zap,
      title: "Easy to Maintain",
      description: "New programs can be populated in just 3 minutes",
      metric: "3min",
      metricLabel: "setup time",
      progress: 95,
      progressLabel: "95% faster than traditional setup",
      colorClass: "pink",
      delay: 0
    },
    {
      icon: LayoutTemplate,
      title: "No-Code Solution",
      description: "Content managers can update programs without technical help",
      metric: "0",
      metricLabel: "code required",
      badges: ["Visual Editor", "Drag & Drop"],
      extraLabel: "Empowers non-technical users",
      colorClass: "pink",
      delay: 0.1
    },
    {
      icon: Grid3X3,
      title: "Modular Design",
      description: "Sections can be omitted, reordered, or repeated",
      metric: "∞",
      metricLabel: "combinations",
      extraLabel: "Complete layout flexibility",
      showBlocks: true,
      colorClass: "pink",
      delay: 0.2
    },
    {
      icon: SlidersHorizontal,
      title: "Multiple Options",
      description: "Sections can be displayed in different styles",
      metric: "5+",
      metricLabel: "style options",
      extraLabel: "Customizable presentation styles",
      showShapes: true,
      colorClass: "pink",
      delay: 0.3
    },
    {
      icon: ShieldCheck,
      title: "Thoroughly Tested",
      description: "Secure, responsive, accessible, tested layouts",
      metric: "100%",
      metricLabel: "coverage",
      features: ["Mobile Responsive", "WCAG Accessible", "Cross-browser Compatible", "Information Security Office compliant"],
      colorClass: "pink",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Built-in metadata for social media sharing and SEO",
      metric: "A+",
      metricLabel: "SEO score",
      progress: 92,
      progressLabel: "Enhanced discoverability & sharing",
      colorClass: "pink",
      delay: 0.5
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      indigo: {
        iconBg: 'bg-indigo-100 dark:bg-indigo-950',
        iconText: 'text-indigo-600',
        metric: 'text-indigo-600',
        progress: 'bg-indigo-500',
        badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200',
        dot: 'bg-indigo-500',
        blocks: ['bg-indigo-300 dark:bg-indigo-100', 'bg-indigo-500 dark:bg-indigo-400', 'bg-indigo-300 dark:bg-indigo-100'],
        shapes: ['bg-indigo-300 rounded-full', 'bg-indigo-400 rounded', 'bg-indigo-500 rounded-sm', 'bg-indigo-600']
      },
      pink: {
        iconBg: 'bg-pink-100 dark:bg-pink-950',
        iconText: 'text-pink-600',
        metric: 'text-pink-600',
        progress: 'bg-pink-500',
        badge: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-200',
        dot: 'bg-pink-500',
        blocks: ['bg-pink-300 dark:bg-pink-100', 'bg-pink-500 dark:bg-pink-400', 'bg-pink-300 dark:bg-pink-100'],
        shapes: ['bg-pink-300 rounded-full', 'bg-pink-400 rounded', 'bg-pink-500 rounded-sm', 'bg-pink-600']
      }
    };
    return colorMap[color];
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .progress-bar {
          transition: width 2s ease-in-out;
        }
      `}</style>

        
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = getColorClasses(feature.colorClass);
              
              return (
                <div
                  key={feature.title}
                  className={`rounded-xl p-6 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 text-sm`}
                  style={{ animationDelay: `${feature.delay}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${colors.iconBg} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${colors.iconText}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${colors.metric}`}>{feature.metric}</div>
                      <div className="">{feature.metricLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="mb-4">{feature.description}</p>
                  
                  {/* Progress Bar */}
                  {feature.progress && (
                    <>
                      <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mb-2">
                        <div 
                          className={`${colors.progress} h-2 rounded-full progress-bar`} 
                          data-width={feature.progress}
                        ></div>
                      </div>
                      <div className="">{feature.progressLabel}</div>
                    </>
                  )}
                  
                  {/* Badges */}
                  {feature.badges && (
                    <>
                      <div className="flex items-center space-x-2 mb-2">
                        {feature.badges.map((badge, i) => (
                          <span key={i} className={`${colors.badge} px-2 py-1 rounded text-xs`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="">{feature.extraLabel}</div>
                    </>
                  )}
                  
                  {/* Blocks for modular design */}
                  {feature.showBlocks && (
                    <>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {colors.blocks.map((blockClass, i) => (
                          <div key={i} className={`${blockClass} h-4 rounded`}></div>
                        ))}
                      </div>
                      <div className="">{feature.extraLabel}</div>
                    </>
                  )}
                  
                  {/* Shapes for multiple options */}
                  {feature.showShapes && (
                    <>
                      <div className="flex space-x-1 mb-2">
                        {colors.shapes.map((shapeClass, i) => (
                          <div key={i} className={`w-4 h-4 ${shapeClass}`}></div>
                        ))}
                      </div>
                      <div className="">{feature.extraLabel}</div>
                    </>
                  )}
                  
                  {/* Feature list */}
                  {feature.features && (
                    <div className="space-y-1 mb-2">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <div className={`w-2 h-2 ${colors.dot} rounded-full mr-2`}></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
    </>
  );
};

export default TemplateFeatures;