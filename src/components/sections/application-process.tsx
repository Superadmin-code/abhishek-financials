export const ApplicationProcess = () => {
  return (
    <section id="process" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="text-center">
          <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold mx-auto mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2">Apply</h3>
          <p className="text-muted-foreground">Submit your application with required documents</p>
        </div>
        
        <div className="text-center">
          <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold mx-auto mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2">Verify</h3>
          <p className="text-muted-foreground">We review and verify your information</p>
        </div>
        
        <div className="text-center">
          <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold mx-auto mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2">Approve</h3>
          <p className="text-muted-foreground">Get approved and start your journey</p>
        </div>
      </div>
    </section>
  );
};