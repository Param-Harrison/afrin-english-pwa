// SVG Components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your English in <span className="text-amber-400">365 Days</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-slate-200">Join the Global Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Stop dreaming about fluent English. Start living it. Join thousands of successful learners 
            who&apos;ve transformed their lives through daily practice and community support.
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-semibold mb-3 text-slate-900">
              Why thousands choose this challenge?
            </p>
            <p className="text-slate-700 text-sm md:text-base">
              Simple daily exercises that work for everyone. Learn together, 
              practice together, and get certificates to show your progress!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#pricing" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 md:px-10 rounded-xl text-lg shadow-xl transition-all transform hover:scale-105 border border-emerald-400/30">
              🚀 Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Your English dreams are dying because of <span className="text-red-600">one simple truth</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            You&apos;ve tried apps, courses, and platforms. But they all miss the two things that actually 
            create fluency: daily practice and real human connection.
          </p>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">The Brutal Reality</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">YOU&apos;RE PRACTICING ALONE</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h4 className="text-lg md:text-xl font-bold text-red-900 mb-2">Why 95% of learners fail</h4>
              <p className="text-red-800 text-sm md:text-base">
                They start with motivation but lose momentum when there&apos;s no one to practice with 
                and no system to keep them accountable. Sound familiar?
              </p>
            </div>
            
            <a href="#pricing" className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-all transform hover:scale-105 shadow-lg">
              💪 Stop Practicing Alone - Join Now
            </a>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12 md:mb-16">
            The Science-Backed System That Creates Fluent Speakers
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Step 1: Get Your Personalized Success Roadmap
              </h3>
              <p className="text-slate-700 mb-6 text-sm md:text-base">
                Start with our comprehensive workbook (ebook) that adapts to your current English level. 
                This isn&apos;t a rigid curriculum - it&apos;s your personal roadmap to fluency.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-lg">
                <p className="text-slate-700 mb-4 text-sm md:text-base">
                  The workbook includes daily exercises, progress tracking, and self-assessment tools 
                  that help you identify exactly where you need to focus.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm md:text-base">Daily speaking prompts and exercises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm md:text-base">Progress tracking sheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm md:text-base">Self-assessment checkpoints</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Step 2: Join the Global Practice Community
              </h3>
              <p className="text-slate-700 mb-6 text-sm md:text-base">
                Connect with learners worldwide in our Telegram community. Practice daily through 
                live discussions, get feedback, and build the accountability that keeps you motivated.
              </p>
              <p className="text-slate-700 mb-6 text-sm md:text-base">
                <strong>This is where the magic happens.</strong> When you practice with real people 
                every day through live discussions, your confidence explodes.
              </p>
              <p className="text-slate-700 text-sm md:text-base">
                No more practicing alone. No more losing motivation. You&apos;ll have a community 
                of people who understand your journey and push you to succeed through live conversations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Step 3: Build Unstoppable Momentum
              </h3>
              <p className="text-slate-700 mb-6 text-sm md:text-base">
                The first 90 days are crucial. Most people give up here because they don&apos;t see 
                immediate results or lose motivation.
              </p>
              <p className="text-slate-700 mb-6 text-sm md:text-base">
                Our system focuses on <strong>Daily Wins</strong> - small achievements that compound into massive results.
              </p>
              <p className="text-slate-700 text-sm md:text-base">
                Complete a speaking exercise from your workbook. Join a live discussion in the community. Track your progress. 
                These daily wins create unstoppable momentum over 365 days.
              </p>
              <p className="text-slate-700 mt-4 font-semibold text-sm md:text-base">
                When you see progress every day, giving up becomes impossible.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#pricing" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all transform hover:scale-105 border border-emerald-400/30">
              🎯 Start Your 365-Day Journey
            </a>
          </div>
        </div>
      </section>

      {/* 15 Minutes Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            The 15-Minute Fluency Formula
          </h2>
          <p className="text-lg md:text-xl text-violet-100 mb-8">
            While others waste years in expensive courses, you&apos;ll achieve real fluency in just 15 minutes a day.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">15</div>
                <div className="text-2xl font-bold text-white mb-2">Minutes Daily</div>
                <p className="text-violet-200 text-sm">
                  That&apos;s all it takes to transform your English forever
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">1</span>
                  </div>
                  <span className="text-violet-100">Complete your daily workbook exercise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">2</span>
                  </div>
                  <span className="text-violet-100">Practice with the community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">3</span>
                  </div>
                  <span className="text-violet-100">Track your progress & celebrate wins</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-bold mb-3">Why This Works When Everything Else Fails</h3>
            <p className="text-violet-100 mb-4">
              <strong>95% of learners fail</strong> because they try to do too much too quickly. 
              Our 15-minute system works because it&apos;s:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="font-semibold text-amber-400 mb-1">Sustainable</div>
                <div className="text-violet-200">Fits any busy schedule</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="font-semibold text-amber-400 mb-1">Enjoyable</div>
                <div className="text-violet-200">Real conversations, not boring drills</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="font-semibold text-amber-400 mb-1">Effective</div>
                <div className="text-violet-200">Proven results in 365 days</div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-amber-400 mb-6">
            Everyone has 15 minutes. Will you invest them in your future?
          </p>
          
          <a href="#pricing" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all transform hover:scale-105 border border-amber-400/30">
            Invest in Your Future - Start Today
          </a>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why Most Learners Fail vs. How You&apos;ll Succeed
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See the difference between traditional learning methods and our proven approach.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 md:p-10 rounded-2xl border-l-4 border-red-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-2">
                The Old Way
              </h3>
              <p className="text-red-600 text-sm md:text-base font-medium mb-4">
                (Why You&apos;re Stuck)
              </p>
              <p className="text-red-800 text-sm md:text-base">
                Expensive platforms with rigid lessons. You learn alone, lose motivation quickly, 
                and never build the confidence to speak in real situations. Most people quit 
                within the first few months, feeling like failures.
              </p>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 md:p-10 rounded-2xl border-l-4 border-emerald-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2">
                The Afrin Way
              </h3>
              <p className="text-emerald-600 text-sm md:text-base font-medium mb-4">
                (Your Path to Success)
              </p>
              <p className="text-emerald-800 text-sm md:text-base">
                A flexible workbook that adapts to your level, plus a supportive community where 
                you practice daily with real people through live discussions. You build confidence through actual conversations 
                and stay motivated through accountability.
              </p>
              <p className="text-emerald-800 mt-4 font-semibold text-sm md:text-base">
                The combination of structured self-study and community practice creates unstoppable momentum.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#pricing" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all transform hover:scale-105 border border-emerald-400/30">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12 md:mb-16">
            How the 365-Day Transformation Works
          </h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 mb-8">
            <p className="text-slate-700 mb-6 text-sm md:text-base">
              The challenge is simple but powerful. You get a comprehensive workbook (ebook) with 365 days 
              of exercises, plus access to our Telegram community for daily practice through live discussions.
            </p>
            <p className="text-slate-700 mb-6 text-sm md:text-base">
              Each day, you complete exercises from your workbook, then practice what you&apos;ve learned 
              in the community through live discussions. The workbook adapts to your progress, and the community provides 
              the accountability you need to succeed.
            </p>
            <p className="text-slate-700 font-semibold text-sm md:text-base">
              No complex platforms. No rigid curriculum. Just proven exercises and real community support.
            </p>
          </div>
          
          <p className="text-center text-lg md:text-xl text-slate-700 mb-8">
            In 365 days, you&apos;ll have built the habit of daily English practice and the confidence 
            to speak fluently in any situation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-200">
              <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-4">Your Personalized Success Roadmap</h3>
              <p className="text-emerald-800 text-sm md:text-base">
                A comprehensive workbook (ebook) with daily exercises that adapt to your current level. 
                Includes speaking prompts, vocabulary building, grammar practice, and progress tracking.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-violet-200">
              <h3 className="text-lg md:text-xl font-bold text-violet-900 mb-4">Daily Community Practice</h3>
              <p className="text-violet-800 text-sm md:text-base">
                Join our Telegram community where you practice daily with learners worldwide through live discussions. 
                Get feedback, build confidence, and stay motivated through real conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            7-Day Risk-Free Guarantee
          </h2>
          <p className="text-lg md:text-xl text-emerald-100">
            Try the challenge for 7 days. If you don&apos;t love the workbook and community, 
            we&apos;ll refund your purchase, no questions asked. Your success is our priority.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Choose Your Path to Fluency
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Start your transformation today. Choose the option that fits your commitment level and begin your journey to English fluency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div className="text-center space-y-6 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Standard Plan</h3>
                <p className="text-slate-500 text-sm font-medium">One-time purchase</p>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600">$29</div>
                  <p className="text-slate-500 text-sm">Perfect for self-motivated learners who want extra tools</p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Includes:</h4>
                  <ul className="space-y-4 text-left text-base">
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-slate-700">365-Day Speaking Challenge Workbook (PDF)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-slate-700">Daily Progress Tracker (Google Sheet)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-slate-700">Bonus: 21-Day Speaking Habit Kickoff Plan (PDF)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-slate-700">Printable Milestone Checklist & Badges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-slate-700">Lifetime download and offline access</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105 shadow-lg hover:shadow-xl mt-6">
                Get Standard Plan
              </button>
            </div>
            
            {/* VIP Plan */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-visible flex flex-col border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl border border-slate-200">
                  Most Popular
                </span>
              </div>
              <div className="relative z-10 text-center space-y-6 pt-4 flex-1">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">VIP Plan</h3>
                <p className="text-slate-300 text-sm font-medium">One-time purchase</p>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-white">$99</div>
                  <p className="text-slate-300 text-sm">Best for learners who want accountability and peer support</p>
                </div>
                <div className="border-t border-slate-600 pt-6">
                  <h4 className="font-semibold mb-4 text-slate-200">Includes everything in Standard Plan, plus:</h4>
                  <ul className="space-y-4 text-left text-base">
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Lifetime access to Private Telegram Group</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Group Discussion Themes (weekly topics)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Peer Voice Note Sharing & Encouragement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Printable Certificate of Completion</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Featured Learner Highlights (success stories)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105 shadow-xl hover:shadow-2xl mt-6">
                Join VIP Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* eBook Only Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-slate-500"></div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                eBook Only – $9
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                <strong>One-time purchase</strong> • Ideal for learners who prefer to go solo with structure
              </p>
              <div className="inline-block bg-slate-200 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📖 EBOOK ONLY - NO COMMUNITY ACCESS
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start space-x-3">
                    <CheckIcon />
                    <span>365-Day Speaking Challenge Workbook (Ebook)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckIcon />
                    <span>Lifetime download and offline access</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckIcon />
                    <span>Self-paced learning structure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckIcon />
                    <span>Daily speaking prompts and exercises</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> This is the workbook only. For community support and additional tools, 
                    consider the Standard or VIP plans above.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-slate-600 mb-4">$9</div>
                <p className="text-slate-500 mb-6">One-time payment</p>
                <button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get eBook Only
                </button>
                <p className="text-xs text-slate-500 mt-3">
                  7-day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12 md:mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Is this a subscription?</h3>
              <p className="text-slate-700">No. All plans are one-time purchases. You keep your materials forever.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Do I need to speak to a teacher?</h3>
              <p className="text-slate-700">No. This is fully self-practice. VIP learners get peer support only.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Can I upgrade later?</h3>
              <p className="text-slate-700">Yes. You can start with any plan and upgrade at any time.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">How is it delivered?</h3>
              <p className="text-slate-700">You get instant access to the PDFs and Google Sheets. VIP members also get a Telegram invite.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">What&apos;s the refund policy?</h3>
              <p className="text-slate-700">7-day satisfaction guarantee. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-white/20">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Afrin English Challenge</h2>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Transform your English in 365 days with structured self-study and community support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven System</h3>
                <p className="text-slate-300 text-sm">Battle-tested methods that work for everyone</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Community</h3>
                <p className="text-slate-300 text-sm">Connect with learners worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Daily Progress</h3>
                <p className="text-slate-300 text-sm">See your improvement every single day</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-300 text-xs sm:text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Afrin English Challenge. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
