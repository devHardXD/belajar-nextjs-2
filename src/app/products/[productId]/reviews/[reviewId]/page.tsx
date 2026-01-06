import { notFound, redirect } from "next/navigation";

function getRandomMath(count: number){
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({ 
    params
}: {
    params: Promise<{ productId: string; reviewId: string }>; 
}){
  const random = getRandomMath(2);
  const { productId, reviewId } = (await params);

  if(random==1){
    throw new Error("Error Loading Review");
  }

  if(parseInt(reviewId) > 1000){
    // notFound();
    redirect("/products");
  }
  return <h1>Review { reviewId } on product { productId }</h1>
}