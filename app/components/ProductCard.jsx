export default function ProductCard({ product }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
            <span className="font-medium text-gray-800">{product.name}</span>
            <span className="text-blue-600 font-semibold">
                Rp. {product.price.toLocaleString()}
            </span>
        </div>
    );
}