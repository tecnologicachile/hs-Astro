import {
  Server,
  Shield,
  Zap,
  RefreshCw,
  Headphones,
  TrendingUp,
  Users,
  Clock,
  Cloud,
  Database,
  Lock,
  CheckCircle,
  LifeBuoy,
  Settings,
  Monitor,
  HardDrive,
  Wifi,
  Globe,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Award,
  Star,
  Heart,
  ThumbsUp,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  FileText,
  Folder,
  Image,
  Video,
  Music,
  Code,
  Terminal,
  Cpu,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Layers,
  Box,
  Package,
  Truck,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Percent,
  Tag,
  Bookmark,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  XCircle,
  MinusCircle,
  PlusCircle,
  type LucideIcon,
} from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  Server,
  Shield,
  Zap,
  RefreshCw,
  Headphones,
  TrendingUp,
  Users,
  Clock,
  Cloud,
  Database,
  Lock,
  CheckCircle,
  LifeBuoy,
  Settings,
  Monitor,
  HardDrive,
  Wifi,
  Globe,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Award,
  Star,
  Heart,
  ThumbsUp,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  FileText,
  Folder,
  Image,
  Video,
  Music,
  Code,
  Terminal,
  Cpu,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Layers,
  Box,
  Package,
  Truck,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Percent,
  Tag,
  Bookmark,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  XCircle,
  MinusCircle,
  PlusCircle,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function DynamicIcon({
  name,
  className = '',
  size,
  strokeWidth = 2,
}: DynamicIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in DynamicIcon map`);
    return null;
  }

  return (
    <IconComponent
      className={className}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}

// Export the icon map for type checking
export type IconName = keyof typeof iconMap;
export { iconMap };
