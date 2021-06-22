import { expect, test } from "@jest/globals";
import { StaticRouter } from "react-router";
import { render } from "@testing-library/react";
import Pet from "../Pet";

test("displays default thumbnail", async () => {
    const pet = render(
        <StaticRouter>
            <Pet />
        </StaticRouter>
    );
    const petThumbNail = await pet.findByTestId("thumbnail");
    expect(petThumbNail.src).toContain("none.jpg");
})

test("displays a non-default correct thumbnail", async () => {
    const pet = render(
        <StaticRouter>
            <Pet images={["1.jpg", "2.jpg", "3.jpg", "4.jpg"]} />
        </StaticRouter>
    );
    const petThumbNail = await pet.findByTestId("thumbnail");
    expect(petThumbNail.src).toContain("1.jpg");
})