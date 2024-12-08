import React from "react";
import CompareImage from "react-compare-image";

type Props = {
  beforeImage: string;
  afterImage: string;
};

export default function CompareImageCPN({ beforeImage, afterImage }: Props) {
  return <CompareImage leftImage={beforeImage} rightImage={afterImage} />;
}
