import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ChiSiamo from "@/pages/ChiSiamo";
import Collezioni from "@/pages/Collezioni";
import Maestria from "@/pages/Maestria";
import Tecnologia from "@/pages/Tecnologia";
import Testimonianze from "@/pages/Testimonianze";
import Contatti from "@/pages/Contatti";
import Privacy from "@/pages/Privacy";
import Termini from "@/pages/Termini";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chi-siamo" component={ChiSiamo} />
      <Route path="/collezioni" component={Collezioni} />
      <Route path="/maestria" component={Maestria} />
      <Route path="/tecnologia" component={Tecnologia} />
      <Route path="/testimonianze" component={Testimonianze} />
      <Route path="/contatti" component={Contatti} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/termini" component={Termini} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
