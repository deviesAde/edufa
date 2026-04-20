export default function ApplicationLogo({ className = '', ...props }) {
    return (
        <img 
            src="/logo.png" 
            alt="Logo" 
            className={`scale-125 transition-transform duration-300 ${className}`} 
            {...props} 
        />
    );
}
