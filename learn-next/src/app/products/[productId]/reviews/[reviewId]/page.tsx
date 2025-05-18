export default async function ReviewDetail({
    params,
}:{
    params:Promise<{productId: string, reviewId: string}>;
}) {
    const {productId, reviewId} = await params;
    return <h1>Review {reviewId} for Product {productId}</h1>;

}