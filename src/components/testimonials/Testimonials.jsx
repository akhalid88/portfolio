import "./testimonials.scss";

export default function Testimonials() {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				<div className="card">
					<div className="top">
						<img src="assets/right-arrow.png" className="left" alt="" />
						<img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg" className="user" alt="" />
						<img src="assets/youtube.png" className="right" alt="" />
					</div>
					<div className="center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi eaque odio, magni repellat et mollitia ea maiores cumque neque libero?
					</div>
					<div className="bottom">
						<h3>Alex</h3>
						<h4>CEO of LAMA</h4>
					</div>
				</div>
			</div>
		</div>
	)
}
