import React, { Component } from 'react'
import {
	Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class Cats extends Component {

	render() {
		console.log(this.props.cats);
		let cats = this.props.cats.map((cat, index) => {
			return (
				<ListGroupItem key={index}
					header = {
						<h4>
							<span className='cat-name'>
								{cat.name}
							</span>
							- <small className='cat-age'>{cat.age} years old</small>
						</h4>
					}>
					<span className='cat-enjoys'>
						{cat.enjoys}
					</span>
				</ListGroupItem>
			)
		})
		return (
			<ListGroup>
				{cats}
			</ListGroup>
		);
	}
}

export default Cats;
