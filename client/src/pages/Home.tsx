import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Database, Zap, Brain, Shield, Download } from "lucide-react";
import { APP_TITLE } from "@/const";

const componentData = [
  { name: 'Core Microservices', value: 6.5, color: '#3b82f6' },
  { name: 'AI Agent Services', value: 2, color: '#8b5cf6' },
  { name: 'Database', value: 1, color: '#10b981' },
  { name: 'Messaging Bus', value: 1, color: '#f59e0b' },
];

const useCaseData = [
  { name: 'Fraud Detection', value: 25, color: '#ef4444' },
  { name: 'Credit Underwriting', value: 25, color: '#3b82f6' },
  { name: 'Financial Planning', value: 25, color: '#10b981' },
  { name: 'Compliance/KYC', value: 25, color: '#f59e0b' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{APP_TITLE}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Spring Boot • PostgreSQL • Flyway • AI Agents</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12">
        {/* Executive Summary */}
        <section className="mb-12">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl">Executive Summary</CardTitle>
              <CardDescription>Architectural scope for next-generation banking application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                This comprehensive scoping report outlines the architecture for a modern, resilient, and intelligent banking application. The proposed design leverages <strong>Spring Boot</strong> for microservices, <strong>PostgreSQL</strong> for transactional data integrity, and <strong>Flyway</strong> for controlled database evolution. A key differentiator is the integral role of <strong>AI Agents</strong>, which automate complex financial operations, enhance security, and provide personalized customer experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Scalable</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Microservices architecture for independent scaling</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Intelligent</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">AI agents for autonomous operations</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Reliable</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">PostgreSQL with transactional integrity</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Secure</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Layered architecture with security at each level</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs for detailed sections */}
        <Tabs defaultValue="architecture" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-200 dark:bg-slate-800">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="minibank">Minibank Agents</TabsTrigger>
            <TabsTrigger value="technology">Technology Stack</TabsTrigger>
          </TabsList>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Clean Architecture for Banking Application</CardTitle>
                <CardDescription>Four-layer architecture following Robert C. Martin's Clean Architecture principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Core Principle: Dependency Rule</h4>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">Inner layers must never depend on outer layers. Business logic remains independent of frameworks, databases, and UI technologies. This ensures testability, flexibility, and maintainability.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">The Four Layers</h4>
                  
                  <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-red-600 text-white text-center text-sm font-bold">1</span>
                      Layer 1: Entities (Domain Layer)
                    </h5>
                    <p className="text-sm text-red-800 dark:text-red-200 mb-2">Contains core business rules and domain logic. Pure Java classes with no framework dependencies. Examples: Account, Transaction, Customer, User entities with business rule implementations.</p>
                    <p className="text-xs text-red-700 dark:text-red-300 font-mono">Packages: domain/entity, domain/factory, domain/valueobject, domain/exception</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-orange-600 text-white text-center text-sm font-bold">2</span>
                      Layer 2: Use Cases (Application Layer)
                    </h5>
                    <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">Contains application-specific business rules implemented as Interactors. Orchestrates interactions between entities and external systems using input/output boundaries (ports and adapters).</p>
                    <p className="text-xs text-orange-700 dark:text-orange-300 font-mono">Packages: application/account/usecase, application/transaction/usecase, application/user/usecase, application/approval/usecase</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-center text-sm font-bold">3</span>
                      Layer 3: Interface Adapters (Adapter Layer)
                    </h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">Converts data between use cases and external systems. Contains Controllers (REST endpoints), Presenters (response formatting), and Gateways (database adapters).</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300 font-mono">Packages: adapter/controller, adapter/presenter, adapter/gateway, adapter/dto</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-green-600 text-white text-center text-sm font-bold">4</span>
                      Layer 4: Frameworks & Drivers (External Layer)
                    </h5>
                    <p className="text-sm text-green-800 dark:text-green-200 mb-2">Contains all external frameworks, libraries, and I/O devices. Spring Boot, PostgreSQL, Flyway, security configuration, and external API integrations.</p>
                    <p className="text-xs text-green-700 dark:text-green-300 font-mono">Packages: infrastructure/persistence, infrastructure/security, infrastructure/config, infrastructure/audit, infrastructure/agent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Project Folder Structure</CardTitle>
                <CardDescription>Complete directory organization for banking-application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-slate-100 font-mono leading-relaxed">{`banking-application/
├── src/main/java/com/banking/
│   ├── domain/                    # Layer 1: Entities
│   │   ├── entity/
│   │   │   ├── Account.java
│   │   │   ├── Transaction.java
│   │   │   ├── Customer.java
│   │   │   ├── Loan.java
│   │   │   └── User.java
│   │   ├── factory/
│   │   │   ├── AccountFactory.java
│   │   │   ├── TransactionFactory.java
│   │   │   └── UserFactory.java
│   │   ├── valueobject/
│   │   │   ├── Money.java
│   │   │   ├── AccountNumber.java
│   │   │   ├── Email.java
│   │   │   └── Password.java
│   │   └── exception/
│   │       ├── DomainException.java
│   │       ├── InvalidPasswordException.java
│   │       └── InsufficientFundsException.java
│   │
│   ├── application/               # Layer 2: Use Cases
│   │   ├── account/
│   │   │   ├── usecase/
│   │   │   │   ├── CreateAccountInteractor.java
│   │   │   │   ├── GetAccountInteractor.java
│   │   │   │   └── UpdateAccountInteractor.java
│   │   │   ├── input/
│   │   │   │   ├── CreateAccountInputBoundary.java
│   │   │   │   └── CreateAccountRequestModel.java
│   │   │   └── output/
│   │   │       ├── AccountPresenter.java
│   │   │       ├── AccountGateway.java
│   │   │       └── CreateAccountResponseModel.java
│   │   ├── transaction/
│   │   │   ├── usecase/
│   │   │   │   ├── TransferFundsInteractor.java
│   │   │   │   ├── WithdrawInteractor.java
│   │   │   │   └── DepositInteractor.java
│   │   │   ├── input/ & output/
│   │   ├── user/
│   │   │   ├── usecase/
│   │   │   │   ├── RegisterUserInteractor.java
│   │   │   │   ├── AuthenticateUserInteractor.java
│   │   │   │   └── UpdateUserInteractor.java
│   │   │   ├── input/ & output/
│   │   ├── approval/
│   │   │   ├── usecase/
│   │   │   │   ├── ApproveOperationInteractor.java
│   │   │   │   ├── RejectOperationInteractor.java
│   │   │   │   └── GetPendingOperationsInteractor.java
│   │   │   ├── input/ & output/
│   │   └── loan/
│   │       ├── usecase/
│   │       │   ├── ApplyForLoanInteractor.java
│   │       │   ├── ApproveLoanInteractor.java
│   │       │   └── DisburseLoanInteractor.java
│   │       ├── input/ & output/
│   │
│   ├── adapter/                   # Layer 3: Interface Adapters
│   │   ├── controller/
│   │   │   ├── AccountController.java
│   │   │   ├── TransactionController.java
│   │   │   ├── UserController.java
│   │   │   ├── LoanController.java
│   │   │   └── ApprovalController.java
│   │   ├── presenter/
│   │   │   ├── AccountPresenterImpl.java
│   │   │   ├── TransactionPresenterImpl.java
│   │   │   └── ...
│   │   ├── gateway/
│   │   │   ├── AccountGatewayImpl.java
│   │   │   ├── TransactionGatewayImpl.java
│   │   │   └── ...
│   │   └── dto/
│   │       ├── AccountDTO.java
│   │       ├── TransactionDTO.java
│   │       └── ...
│   │
│   ├── infrastructure/            # Layer 4: Frameworks & Drivers
│   │   ├── persistence/
│   │   │   ├── entity/
│   │   │   │   ├── AccountEntity.java
│   │   │   │   ├── TransactionEntity.java
│   │   │   │   └── ...
│   │   │   ├── repository/
│   │   │   │   ├── AccountRepository.java
│   │   │   │   ├── TransactionRepository.java
│   │   │   │   └── ...
│   │   │   └── mapper/
│   │   │       ├── AccountMapper.java
│   │   │       └── ...
│   │   ├── security/
│   │   │   ├── JwtTokenProvider.java
│   │   │   ├── SecurityConfig.java
│   │   │   └── AuthenticationFilter.java
│   │   ├── config/
│   │   │   ├── BeanConfiguration.java
│   │   │   ├── DatabaseConfiguration.java
│   │   │   └── AuditingConfiguration.java
│   │   ├── audit/
│   │   │   ├── AuditLog.java
│   │   │   ├── AuditRepository.java
│   │   │   └── AuditAspect.java
│   │   └── agent/
│   │       ├── FraudDetectionAgent.java
│   │       ├── UnderwritingAgent.java
│   │       └── ...
│   │
│   └── BankingApplication.java    # Spring Boot Main
│
├── src/main/resources/
│   ├── application.yml
│   └── db/migration/
│       ├── V1__create_user_table.sql
│       ├── V2__create_account_table.sql
│       ├── V3__create_transaction_table.sql
│       ├── V4__create_loan_table.sql
│       ├── V5__create_approval_table.sql
│       └── V6__create_audit_log_table.sql
│
├── src/test/java/com/banking/
│   ├── domain/
│   ├── application/
│   └── adapter/
│
├── pom.xml
└── README.md`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Key Design Patterns & Principles</CardTitle>
                <CardDescription>Design patterns used throughout the architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Factory Pattern</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Used in domain layer to create entities with proper initialization, ensuring consistency and encapsulation.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Adapter Pattern</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Used in interface adapters layer to convert between external formats and internal models.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Repository Pattern</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Abstracts database operations in gateway implementations, enabling easy switching between data sources.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Dependency Injection</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Spring manages dependencies, injecting implementations into constructors for loose coupling.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Immutability</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Domain objects and DTOs are immutable, preventing unintended state changes and ensuring audit trail integrity.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">SOLID Principles</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Architecture adheres to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Architectural Component Distribution</CardTitle>
                <CardDescription>Overview of system components and their quantities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={componentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                        <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="font-semibold text-slate-900 dark:text-white">Core Microservices: 5-8</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Account, Transaction, Customer, Loan, Auth services built with Spring Boot and Spring Data JPA</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="font-semibold text-slate-900 dark:text-white">AI Agent Services: 1-3</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Fraud Detection, Financial Planning, Compliance agents powered by Spring AI</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="font-semibold text-slate-900 dark:text-white">Database: 1 Primary</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">PostgreSQL with Flyway for schema versioning and migrations</p>
                    </div>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="font-semibold text-slate-900 dark:text-white">Messaging Bus: 1</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Kafka or RabbitMQ for asynchronous communication between services</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Agents Tab */}
          <TabsContent value="agents" className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>AI Agent Use Cases & Distribution</CardTitle>
                <CardDescription>Autonomous agents for financial operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={useCaseData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {useCaseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Fraud Detection Agent</h4>
                      <p className="text-sm text-red-800 dark:text-red-200">Real-time transaction monitoring with automatic blocking of suspicious activity. Integrates with Transaction and Account services.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Credit Underwriting Agent</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Analyzes financial profiles and determines creditworthiness. Interfaces with Customer and Loan services.</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Financial Planning Agent</h4>
                      <p className="text-sm text-green-800 dark:text-green-200">Provides personalized budget tracking and investment recommendations. Reads from Account and Transaction services.</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Compliance Agent</h4>
                      <p className="text-sm text-amber-800 dark:text-amber-200">Monitors KYC/AML compliance and regulatory adherence. Audits all services and generates compliance reports.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Agent Architecture Pattern</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Each agent is a dedicated Spring Boot microservice using Spring AI framework. Agents use function calling to invoke core banking APIs, enabling autonomous decision-making and task execution.</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Example: A fraud agent receives transaction data, reasons about risk patterns, and automatically calls the Account Service to lock suspicious accounts—all without human intervention.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Minibank Agents Tab */}
          <TabsContent value="minibank" className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Minibank Agents: Operational Users with Approval Workflows</CardTitle>
                <CardDescription>Back-office users with maker-checker approval pattern</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What are Minibank Agents?</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Minibank agents are operational users who perform back-office banking operations within the system. Unlike AI agents (which are autonomous), minibank agents are human users who operate within a strict approval workflow to ensure data authenticity, correctness, and regulatory compliance. All their data is stored in the central PostgreSQL database.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Maker-Checker Approval Pattern</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                        <span className="inline-block w-8 h-8 rounded-full bg-purple-600 text-white text-center text-sm font-bold">1</span>
                        Maker (Originator)
                      </h5>
                      <p className="text-sm text-purple-800 dark:text-purple-200">The minibank agent who initiates an operation (e.g., creating a customer account, initiating a transfer, processing a loan application). Makers have limited privileges and cannot execute transactions without approval.</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        <span className="inline-block w-8 h-8 rounded-full bg-green-600 text-white text-center text-sm font-bold">2</span>
                        Checker (Approver)
                      </h5>
                      <p className="text-sm text-green-800 dark:text-green-200">A higher-privileged user (supervisor or compliance officer) who reviews and validates the maker's actions. The checker verifies compliance with policies and regulations before approval.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-amber-600 text-white text-center text-sm font-bold">3</span>
                      Approval/Rejection & Execution
                    </h5>
                    <p className="text-sm text-amber-800 dark:text-amber-200">After review, the checker approves or rejects the transaction. If approved, the operation is executed (e.g., funds transferred, account created). If rejected, the maker is notified to revise and resubmit.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Approval Workflow State Machine</h4>
                  <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-yellow-200 dark:bg-yellow-900 rounded text-yellow-900 dark:text-yellow-100 font-semibold">PENDING</span>
                      <span>↓ (Checker Reviews)</span>
                    </div>
                    <div className="flex items-center gap-4 ml-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-green-200 dark:bg-green-900 rounded text-green-900 dark:text-green-100 font-semibold">APPROVED</span>
                        <span>→ (Execute)</span>
                        <span className="px-2 py-1 bg-blue-200 dark:bg-blue-900 rounded text-blue-900 dark:text-blue-100 font-semibold">EXECUTED</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 ml-4">
                      <span className="px-2 py-1 bg-red-200 dark:bg-red-900 rounded text-red-900 dark:text-red-100 font-semibold">REJECTED</span>
                      <span>→ (Maker Revises)</span>
                      <span className="px-2 py-1 bg-yellow-200 dark:bg-yellow-900 rounded text-yellow-900 dark:text-yellow-100 font-semibold">PENDING</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Key Benefits of Maker-Checker Pattern</CardTitle>
                <CardDescription>Why this pattern is critical for banking operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Error Reduction</h5>
                    <p className="text-sm text-green-800 dark:text-green-200">A second person catches data entry errors, missing information, and logical inconsistencies before they propagate into the system.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">✓ Fraud Prevention</h5>
                    <p className="text-sm text-red-800 dark:text-red-200">Segregation of duties makes it extremely difficult for a single user to manipulate data or conduct unauthorized activities without detection.</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Accountability</h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Clear role separation creates an audit trail where each action is logged and traceable, enhancing transparency and responsibility.</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Compliance</h5>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Regulatory requirements (AML, FATCA, KYC/CDD) are enforced by design, as a second person verifies compliance before execution.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Minibank Agent Responsibilities</CardTitle>
                <CardDescription>Typical back-office operations performed by minibank agents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span><strong>Customer Onboarding:</strong> Creating new customer accounts, verifying KYC/CDD documentation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span><strong>Transaction Processing:</strong> Initiating fund transfers, processing payments, reconciling accounts.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span><strong>Loan Management:</strong> Creating loan applications, updating loan statuses, processing disbursements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span><strong>Account Management:</strong> Updating customer information, managing account types, handling account closures.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span><strong>Compliance Operations:</strong> Generating compliance reports, flagging suspicious transactions for investigation.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technology Stack Tab */}
          <TabsContent value="technology" className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Technology Stack Overview</CardTitle>
                <CardDescription>Core technologies and their roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Spring Boot
                    </h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">Framework for building scalable microservices with built-in security, auto-configuration, and embedded servers.</p>
                    <p className="text-xs text-orange-700 dark:text-orange-300 font-mono bg-white dark:bg-slate-900 p-2 rounded">Key Components: @RestController, @Service, Spring Data JPA, Spring Security</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      PostgreSQL
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">Relational database with advanced features, transactional integrity, and support for Transactional DDL.</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300 font-mono bg-white dark:bg-slate-900 p-2 rounded">Key Features: ACID compliance, JSON support, Full-text search, Extensibility</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Flyway
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200 mb-2">Database migration tool ensuring versioned, auditable, and consistent schema changes across environments.</p>
                    <p className="text-xs text-green-700 dark:text-green-300 font-mono bg-white dark:bg-slate-900 p-2 rounded">Key Features: Version control, Atomic migrations, Rollback support, Regulatory compliance</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Spring AI
                    </h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">Framework for integrating AI capabilities into Spring Boot applications with unified LLM API support.</p>
                    <p className="text-xs text-purple-700 dark:text-purple-300 font-mono bg-white dark:bg-slate-900 p-2 rounded">Key Features: Function calling, LLM integration, Prompt templates, Tool use</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Key Considerations */}
        <section className="mt-12">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Key Considerations & Next Steps</CardTitle>
              <CardDescription>Important factors for successful implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Security & Compliance</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span>Implement Spring Security for authentication and authorization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span>Enable HTTPS and CSRF protection on all endpoints</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span>Implement comprehensive audit logging for agent actions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span>Ensure regulatory compliance (PCI-DSS, KYC/AML) by design</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Scalability & Operations</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                      <span>Deploy microservices with container orchestration (Kubernetes)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                      <span>Implement circuit breakers and resilience patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                      <span>Set up comprehensive monitoring and alerting (Prometheus, Grafana)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                      <span>Plan for database replication and disaster recovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>This comprehensive scoping report was generated by Manus AI for banking application architecture planning.</p>
          <p className="mt-2">Last updated: November 2025</p>
        </footer>
      </main>
    </div>
  );
}
