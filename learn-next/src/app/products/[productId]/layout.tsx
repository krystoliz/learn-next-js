export default function ProductDetailsLayout({
    children,
}:{
    children: React.ReactNode
}) {

    return (
        <div>
            {children}
            <h2>Product Details</h2>
        </div>
    );
}