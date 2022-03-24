export const comments = (data) => {
    const loading = document.querySelector('.loading');
    loading.remove();

    const comments = data.comments;
    let commentsContainer = document.querySelector('#reviews .comments-container');
    let newComment

    function createComment(part1, part2) {
        newComment = document.createElement('div');
        newComment.classList.add('review-margin-bottom');
        newComment.classList.add('row');
        newComment.classList.add('comment-item');
        newComment.innerHTML = `
                ${part1}
				${part2}
            `
        commentsContainer.append(newComment) 
    }


    comments.forEach((comment, index) => {
       let photo = comment.image ? comment.image : 'no-photo.png'
       let part1 = `
            <div class="col-xs-3 col-sm-2">
				<div class="review-user">
					<img src="images/users/${photo}" alt="" class="img-responsive avatar">
				</div>
			</div>
       `
       let part2 = `
            <div class="col-xs-9 col-sm-9">
				<div class="review-inner review-gray review-arrow review-arrow-right">
					<p class="text-normal">${comment.author}</p>
					<p>${comment.comment}</p>
				</div>
			</div>
       `
        if(index % 2 === 1) {
           createComment(part1, part2)
        } else {
            createComment(part2, part1)
        }
    })

    let commentsAll = Array.from(document.querySelectorAll('.comment-item'));
    commentsAll.forEach((comment, index) => {
        if(index > 2) {
             comment.classList.add('noActive-comment');
        } else {
                comment.classList.remove('noActive-comment');
            }
        })

    setInterval(() => {
        commentsAll.forEach(comment => {
            comment.classList.toggle('noActive-comment');
        })
    }, 20000);
}

	