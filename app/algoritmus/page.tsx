import { Algorithm } from "../components/Algorithm";

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return <Algorithm />;
}
