// https://codepen.io/nazarelen/pen/rLgLrA
import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'business-card',
  styleUrl: 'business-card.scss',
  shadow: true
})
export class BusinessCard {

  @Prop() name: string;
  @Prop() jobPosition: string;
  @Prop() phone: string;
  @Prop() email: string;
  @Prop() website: string;
  @Prop() linkedInProfile: string;

  render() {

    return (
      <div class="card-container">
        <div class="card">
          <div class="front">
            <div class="logo"><span></span></div>
          </div>
          <div class="back">
            <h1>{this.name}<span>{this.jobPosition}</span></h1>
            <ul>
              <li>{this.phone}</li>
              <li>{this.email}</li>
              <li>
                <a href={this.website} target="_blank">Website</a>
              </li>
              <li>
                <a href={this.linkedInProfile} target="_blank">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
