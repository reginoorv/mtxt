
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, detailedDescription, icon }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300",
        isHovered ? "transform scale-105 shadow-lg bg-blue-50" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="text-taxmagnet-blue mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-center text-taxmagnet-darkblue">{title}</h3>
        
        <div className="mt-2 flex-grow">
          {!isHovered && (
            <p className="text-gray-600 text-center animate-fade-in">{description}</p>
          )}
          
          {isHovered && (
            <div className="animate-fade-in">
              <p className="text-gray-700">{detailedDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
