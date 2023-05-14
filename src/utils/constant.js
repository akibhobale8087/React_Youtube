const GOOGLE_API_KEY = "AIzaSyC6Gj_SjwDbSXLYyhDj2M5tKL7fHFXUCus";

export const YOUTUBE_MOST_POPULAR_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


// Infinite Scorll much greate then pagination
// live Chat is much greater then Infinite Scroll