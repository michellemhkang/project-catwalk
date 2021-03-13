import React from 'react';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }


}

export default Overlay;

class Styles extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, name) {
      console.log(id);
      console.log(name);
      // e.preventDefault();
      // console.log(e.target.alt);
      // this.props.changeStyle(e.target.alt);
      this.props.changeStyle(id, name);
      // this.props.reset();
  }

  render() {

      const isSelected = this.props.selectedStyleName === this.props.name;
      const className = isSelected ? styling.selectedThumbnail : styling.thumbnail;

      return (
          <div>
              <img src={this.props.photos[0].thumbnail_url} alt={this.props.name} onClick={() => this.handleClick(this.props.id, this.props.name)} className={className} />
          </div>
      )
  }
}