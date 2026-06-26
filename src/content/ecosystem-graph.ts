import type {
  ConnectionState,
  EcosystemProductNode,
  ProductConnection,
} from "./types";
import { getProductBySlug } from "./products";

export const ecosystemProductNodes: EcosystemProductNode[] = [
  {
    slug: "specsentinel",
    groupId: "governance",
    groupLabel: "Contract Governance",
    deployment: "standalone",
    status: "live",
  },
  {
    slug: "pnlguard",
    groupId: "business",
    groupLabel: "Business Applications",
    deployment: "standalone",
    status: "live",
  },
  {
    slug: "chatloom",
    groupId: "business",
    groupLabel: "Business Applications",
    deployment: "standalone",
    status: "live",
  },
  {
    slug: "goforge",
    groupId: "platform",
    groupLabel: "Platform",
    deployment: "standalone",
    status: "live",
  },
  {
    slug: "sentryai",
    groupId: "operational",
    groupLabel: "Operational Intelligence",
    deployment: "standalone",
    status: "live",
  },
];

export const ecosystemConnections: ProductConnection[] = [
  {
    id: "specsentinel-chatloom",
    from: "specsentinel",
    to: "chatloom",
    state: "implemented",
    label: "Implemented",
    description:
      "Contract governance gates API changes before ChatLoom deployments.",
  },
  {
    id: "specsentinel-pnlguard",
    from: "specsentinel",
    to: "pnlguard",
    state: "implemented",
    label: "Implemented",
    description:
      "OpenAPI governance validates PnLGuard API contracts in CI pipelines.",
  },
  {
    id: "goforge-sentryai",
    from: "goforge",
    to: "sentryai",
    state: "implemented",
    label: "Implemented",
    description:
      "GoForge orchestration failures route to SentryAI for structured diagnosis.",
  },
  {
    id: "specsentinel-goforge",
    from: "specsentinel",
    to: "goforge",
    state: "planned",
    label: "Planned Integration",
    description:
      "Governance policies will gate workflow deployments through GoForge.",
  },
  {
    id: "specsentinel-sentryai",
    from: "specsentinel",
    to: "sentryai",
    state: "planned",
    label: "Planned Integration",
    description:
      "Contract drift signals will feed operational intelligence dashboards.",
  },
  {
    id: "goforge-pnlguard",
    from: "goforge",
    to: "pnlguard",
    state: "planned",
    label: "Planned Integration",
    description:
      "PnL break remediation workflows will orchestrate through GoForge.",
  },
  {
    id: "goforge-chatloom",
    from: "goforge",
    to: "chatloom",
    state: "planned",
    label: "Planned Integration",
    description:
      "Multi-channel GenAI jobs will run on the GoForge worker pool.",
  },
  {
    id: "chatloom-sentryai",
    from: "chatloom",
    to: "sentryai",
    state: "planned",
    label: "Planned Integration",
    description:
      "GenAI pipeline failures will classify through SentryAI incident templates.",
  },
  {
    id: "pnlguard-sentryai",
    from: "pnlguard",
    to: "sentryai",
    state: "planned",
    label: "Planned Integration",
    description:
      "Financial anomaly events will export structured summaries for SRE handoffs.",
  },
];

export function getEcosystemNodes(): EcosystemProductNode[] {
  return ecosystemProductNodes;
}

export function getEcosystemConnections(): ProductConnection[] {
  return ecosystemConnections;
}

export function getConnectionsByState(
  state: ConnectionState,
): ProductConnection[] {
  return ecosystemConnections.filter((c) => c.state === state);
}

export function getConnectionsForSlug(slug: string): ProductConnection[] {
  return ecosystemConnections.filter(
    (c) => c.from === slug || c.to === slug,
  );
}

export function getConnectedSlugs(slug: string): Set<string> {
  const connected = new Set<string>([slug]);
  for (const conn of getConnectionsForSlug(slug)) {
    connected.add(conn.from);
    connected.add(conn.to);
  }
  return connected;
}

export function formatConnectionLabel(
  conn: ProductConnection,
): string {
  const from = getProductBySlug(conn.from)?.name ?? conn.from;
  const to = getProductBySlug(conn.to)?.name ?? conn.to;
  return `${from} → ${to}`;
}
