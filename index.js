let flashCards = document.getElementById("FlashCards");
let result = "";

for (let i = 0; i < movieArray.length; i++) {
	result += `
                <div class="col-md-4">
					<div class="card">
						<figure class="movieCard mb-0">
							<img
								src="http://image.tmdb.org/t/p/w1280${movieArray[i].backdrop_path}"
								alt=""
							/>
							<figcaption>
								<div class="ratingSection">
									<div class="row">
										<div class="col-10">
											<h3 class="movieName">${movieArray[i].title}</h3>
										</div>
										<div
											class="col-2 align-self-center mb-0"
										>
											<span class= ${
												movieArray[i].vote_average >= 8
													? "bg-success"
													: movieArray[i]
															.vote_average > 5
													? "bg-warning"
													: "bg-danger"
											}>${
		movieArray[i].vote_average
	}</span>
										</div>
									</div>
								</div>
								<div class="overviewSection">
									<h4>${movieArray[i].original_title}</h4>
									<em>overview</em>
									<p>
										${movieArray[i].overview}
									</p>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
    `;
}

flashCards.innerHTML = result;
