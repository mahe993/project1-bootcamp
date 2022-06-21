import React from "react";
import Input from "../components/input";

export default class NewIdeaTab extends React.Component {
  render() {
    return (
      <div>
        <icon>Lightbulb</icon>
        <form>
          <Input
            for="ideaName"
            label="Name"
            type="text"
            placeholder="Idea name"
          />
          <Input
            for="ideaSummary"
            label="Business Summary"
            type="text"
            placeholder="Short summary/tagline"
          />
          <label htmlFor="ideaDescription">Description</label>
          <textarea
            name="ideaDescription"
            id="ideaDescription"
            placeholder="Be as detailed and concise as possible. Use point forms for a more digestable description"
          />
          <Input
            for="ideaPrice"
            label="Sale Price (USD$)"
            type="number"
            placeholder="0"
          />
          <div className="termsAndConditions">
            <p>- Each application will costs $9.90</p>
            <p>
              - Each application is subjected to review from Ideas Market with
              no guarantee of approval
            </p>
            <p>
              - Read all terms and conditions <a href="">here</a>
            </p>
          </div>
          <Input for="ideaSubmit" type="submit" value="APPLY" />
        </form>
      </div>
    );
  }
}
