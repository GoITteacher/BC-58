const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = '/comments';

function getCommentsByPostId(POST_ID) {
  const PARAMS = new URLSearchParams({
    postId: POST_ID,
  });

  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error');
    }
  });
}

getCommentsByPostId(2).then(data => {
  console.log('Data', data);
});

getCommentsByPostId(3).then(comments => {
  console.log('Comments', comments);
});
