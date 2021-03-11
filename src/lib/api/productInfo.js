import axios from 'axios';

// 상품 상세 정보 불러오기
export const getProductInfo = id => axios.get(`http://3.35.221.9:8080/api/goods/${id}`);

// 상품 늘 사는것 추가
export const postWishList = product_id =>
  axios.post(`http://3.35.221.9:8080/api/mypage/mypage_wishlist/`, product_id);

// 장바구니 담기
export const postAddCart = addProductInfo =>
  axios.post(`http://3.35.221.9:8080/api/goods/goods_cart`, addProductInfo);

// 후기작성 가능 리스트 불러오기
export const getWritableReviews = () =>
  axios.get(`http://3.35.221.9:8080/api/mypage/writable-reviews`);

// 리뷰 작성 등록
export const postReview = reviewInfo => {
  return axios.post(
    `http://3.35.221.9:8080/api/mypage/mypage_review/${reviewInfo.product_id}`,
    reviewInfo,
  );
};
