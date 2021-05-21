import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
	return (
		<div className="topbar" id="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">coder.</a>
					<div className="itemContainer">
						<Person className="icon"/>
						<span>(123) 456-7890</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon"/>
						<span>test@coder.com</span>
					</div>
				</div>
				<h1>Hello</h1>
				<div className="right">
					<div className="hamburger">
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	)
}