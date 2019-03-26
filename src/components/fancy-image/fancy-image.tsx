import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'web-fancy-image',
  styleUrl: 'fancy-image.scss',
})
export class FancyImage {
  @Prop() imageStyle: string = 'rounded';
  @Prop({attr: 'image-url'}) imageURL: string = '';
  @Prop() imageAlt: string = '';

  render() {

    const customCSSClass = this.imageStyle != ''
      ? ` web-c-fancy-image--${this.imageStyle}`
      : '';

    return (
      <div class={'web-c-fancy-image' + customCSSClass}>
        {this.imageURL != ''
          ? <img src={this.imageURL} alt={this.imageAlt}/>
          : ''}
      </div>
    );
  }
}
