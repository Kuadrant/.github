Kuadrant enables hybrid cloud application developers to securely expose & consume k8s services. Think AuthN/AuthZ, rate limiting, and OAS.

# Context
Kubernetes gives you the framework to architect and develop services but when it comes to successfully exposing them, be it to other services or human users, Kubernetes gives you the building blocks but not an out-of-the-box solution.

Kuadrant aims to deliver a smooth experience to providers and consumers of services when it comes to rate limiting, authentication, authorization, discoverability, versioning, usage contracts, insights, etc. 

# Components
Kuadrant is the umbrella organization, its current active projects are:

[Limitador](https://github.com/Kuadrant/limitador) - Rate limiting of requests to a Service prior to, or after, Authentication to protect a service, limit overall workload, or enforce business rules as to the use of the Service. It is a high-performance, low resource implementation that can be used directly with Envoy (RLS) or via a REST API. Includes single instance (multi-threaded) storage in memory or shared storage via an external Redis or Infinispan.

[Authorino](https://github.com/Kuadrant/authorino) - general-purpose AuthN/AuthZ PEP (Policy Enforcement Point) that works with Envoy (External Auth GRPC API) and IdPs such as Keycloak and Kubernetes built-in auth system, providing functionalities such as Zero Trust token verification, extensibility via OPA policies, JSON/JWT pattern-matching authorization rules, token normalization, amongst others.

[Kuadrant Controller](https://github.com/Kuadrant/kuadrant-controller) - The above components can be configured via Custom Resources specific to each of them. The Kuadrant controller exposes higher level objects (API Products & APIs for now) and  that simplify their use and takes care of configuring them when used together.

[Kuadrant CTL](https://github.com/Kuadrant/kuadrantctl) which is currently the way to install Kuadrant

An exploration and PoC is underway of a next gen Developer Portal that is broader than API Management, and could cover “Event APIs” and other needs.
