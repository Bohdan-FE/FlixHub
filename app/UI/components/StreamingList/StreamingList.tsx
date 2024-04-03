import ProviderIcon from "./ProviderIcon";

interface FlatRateProvider {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
}

export default function StreamingList({ providers }: { providers: any }) {
    const { results } = providers
    if (!results.SK?.flatrate) return
    return (
        <ul className="flex justify-end mb-4 items-center gap-3">
            {results.SK?.flatrate.map((provider: FlatRateProvider) => <li key={provider.provider_id}><ProviderIcon provider={provider.provider_name} /></li>)}
        </ul>
    )
}