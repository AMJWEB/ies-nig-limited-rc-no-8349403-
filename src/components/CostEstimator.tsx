import { useState } from 'react';
import { Calculator, Info, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const CostEstimator = () => {
  const [service, setService] = useState('plumbing');
  const [task, setTask] = useState('repair');
  const [complexity, setComplexity] = useState('standard');
  const [size, setSize] = useState(1);

  const calculateEstimate = () => {
    let base = 100;
    if (service === 'plumbing') base = 150;
    if (service === 'electrical') base = 180;
    if (service === 'hvac') base = 250;
    if (service === 'roofing') base = 800;
    if (service === 'landscaping') base = 80;

    const taskMultipliers: Record<string, number> = {
      repair: 1,
      install: 2.5,
      replace: 1.8,
      inspect: 0.6,
    };

    const complexityMultipliers: Record<string, number> = {
      standard: 1,
      complex: 1.5,
      emergency: 2.2,
    };

    const total = base * (taskMultipliers[task] || 1) * (complexityMultipliers[complexity] || 1) * size;
    return total.toFixed(0);
  };

  return (
    <section id="estimator" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-none text-sm px-4 py-1">Online Tool</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Project Cost Estimator</h2>
            <p className="text-lg text-muted-foreground">
              Get a rough idea of your project costs before we even arrive. Our estimator uses current market rates for labor and materials.
            </p>
            <ul className="space-y-4">
              {[
                'Transparent pricing with no hidden fees',
                'Includes labor and standard material costs',
                'Adjustable based on project complexity',
                'Instantly book after getting your estimate'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="border-none shadow-2xl p-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Estimate Your Project
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Service Type</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="hvac">HVAC</SelectItem>
                      <SelectItem value="roofing">Roofing</SelectItem>
                      <SelectItem value="landscaping">Landscaping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Task</Label>
                  <Select value={task} onValueChange={setTask}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Repair</SelectItem>
                      <SelectItem value="install">Installation</SelectItem>
                      <SelectItem value="replace">Replacement</SelectItem>
                      <SelectItem value="inspect">Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Complexity</Label>
                  <Select value={complexity} onValueChange={setComplexity}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="complex">Complex / Large</SelectItem>
                      <SelectItem value="emergency">Emergency / ASAP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quantity / Area (units)</Label>
                  <Input 
                    type="number" 
                    min={1} 
                    value={size} 
                    onChange={(e) => setSize(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center space-y-2">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Estimated Cost</p>
                <p className="text-5xl font-black text-primary">${calculateEstimate()}</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Info className="h-3 w-3" />
                  Final price may vary after on-site inspection
                </p>
              </div>

              <Button className="w-full h-12" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Book This Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
