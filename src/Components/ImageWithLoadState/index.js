import React from "react";

import spin from '../../assets/spin-loader.gif';

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, hasError: false };
  }

  handleImageLoaded() {
    this.setState({ loading: false, hasError: false });
  }

  handleImageErrored() {
    this.setState({ loading: false, hasError: true });
  }

  render() {
    return (
      <div>
        {
          this.state.loading
            ? <img
              style={{ display: 'block', margin: '0 auto' }}
              src={spin}
              alt="carregando" />
            : this.state.hasError
              ? <p>Houve um problema ao carregar a imagem!</p>
              : null
        }
        <img
          src={this.props.src}
          className={this.props.className}
          onLoad={() => this.handleImageLoaded()}
          onError={() => this.handleImageErrored()}
          alt="mapa"
        />
      </div>
    );
  }
}
export default ImageWithStatusText;
