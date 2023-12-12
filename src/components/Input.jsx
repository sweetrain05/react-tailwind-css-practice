export default function Input({ label, invalid, ...props }) {
    // Conditional styling with tailwind css
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClasses =
        'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-md focus:bg-gray-200 focus:outline-none focus:ring focus:ring-amber-500 caret-amber-500';

    if (invalid) {
        labelClasses += ' text-red-400';
        inputClasses += ' bg-red-300';
    } else {
        labelClasses += ' text-amber-200';
        inputClasses += ' bg-stone-200';
    }

    return (
        <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputClasses} {...props} />
        </p>
    );
}
