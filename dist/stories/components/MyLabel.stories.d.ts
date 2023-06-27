import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("../../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
        };
        allCaps: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
