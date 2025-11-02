import { useState } from "react";
import beforeImage from "@/assets/before-garden-1.jpg";
import afterImage from "@/assets/after-garden-1.jpg";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Transformations
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            See the Difference We Make
          </h2>
          <p className="text-lg text-muted-foreground">
            Real gardens, real results. Slide to compare before and after.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Before & After Images */}
            <div className="relative w-full aspect-[4/3]">
              {/* After Image (Full Width) */}
              <img
                src={afterImage}
                alt="Beautiful well-maintained garden after professional landscaping"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={beforeImage}
                  alt="Garden before professional landscaping maintenance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-4 bg-primary" />
                    <div className="w-0.5 h-4 bg-primary" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-foreground/90 text-background px-4 py-2 rounded-full text-sm font-medium">
                Before
              </div>
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                After
              </div>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before and after slider"
            />
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            Northside Garden · Complete renovation with lawn restoration and flower beds
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
