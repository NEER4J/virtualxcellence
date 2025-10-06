export interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

export interface TextSliderData {
  items: ITextSlide[];
}
const textSliderData: TextSliderData = {
  items: [
    {
      id: 1,
      text: `Exhibiting at Gytex 2025`,
      suffix: `Meet us at the premier technology exhibition`,
    },
    {
      id: 2,
      text: `Where Artificial Intelligence Meets Bold Creativity`,
      suffix: `Empowering Brands Through Intelligent Design`,
    },
    {
      id: 4,
      text: `Smarter Design Through Artificial Intelligence`,
      suffix: `Fueling Brand Transformation`,
    },
    {
      id: 5,
      text: `Exhibiting at Gytex 2025`,
      suffix: `Meet us at the premier technology exhibition`,
    },
    {
      id: 6,
      text: `Innovating the Future with AI-Driven Solutions`,
      suffix: `Redefining User Experiences`,
    },
    {
      id: 8,
      text: `Smarter Design Through Artificial Intelligence`,
      suffix: `Fueling Brand Transformation`,
    },
    {
      id: 9,
      text: `Exhibiting at Gytex 2025`,
      suffix: `Meet us at the premier technology exhibition`,
    },
  ],
};

export default textSliderData;
