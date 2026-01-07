Service Level Agreement (SLA)

Last updated: [Insert Date]

This Service Level Agreement ("SLA") outlines the operational expectations, support scope, and responsibilities associated with Oriphim’s licensed signal delivery systems. It applies to all active license holders under contract with Oriphim Labs LLC ("Oriphim", “we”, “our”).

    Signal Delivery
API Access

Uptime Guarantee: 99.5% monthly uptime (measured in UTC)

Latency Target: Sub-150ms average response time (U.S. East)

Rate Limits: Defined per tier (e.g., 10 req/min for Base, 50+ for Premium)

Docker Deployment

Clients are responsible for infrastructure uptime and integration.

We provide model versioning, update logs, and replacement images on request.

Failover Protection

Redundant signal generation nodes

Automated health checks with halt-state triggers on data anomalies

If degraded service is detected, clients are notified within 2 hours

    Security & Access

Authentication: API key required per client; rotate every 90 days or upon request

Data Handling: Oriphim stores no trading data or PnL logs unless authorized for monitoring purposes

Isolation: No shared state between client environments; all signal streams are logically isolated

    Support & Response Times
Priority	Issue Type	Response Time	Channels
P1 – Critical	API outage, signal failure	< 2 business hours	Slack / Email
P2 – Major	Degraded latency, wrong symbol response	< 1 business day	Slack / Email
P3 – Minor	Documentation, non-urgent behavior	< 2 business days	Email only

Slack support available for Pro and Premium tiers.
Base tier receives support via email only.

    Model Updates & Versioning

Semantic Versioning: (e.g., v2.3.1)

Client Control: No forced updates; clients may lock to specific model versions

Changelog: All updates documented and timestamped

    Trial Environment Terms

During trial periods:

We provide signal access for limited symbols via API or container

All outputs are watermarked and logged for performance validation

Trials may be revoked for misuse, sharing, or abuse of the platform

    Exclusions & Limitations

This SLA does not apply to:

Downtime caused by client-side infrastructure or broker connectivity

Delays due to market data outages beyond Oriphim's control

Custom model variants not under a maintenance contract

    Legal Enforcement

This SLA is enforceable only for paying clients under an active license agreement.
Oriphim reserves the right to revise this SLA at any time with written notice.

For SLA breaches, remedies may include:

Service credits (at Oriphim's discretion)

Early contract termination (if mutually agreed)

    Contact

For SLA inquiries or technical escalations:
    support@oriphim.com
    Secure portal: https://api.oriphim.com/support