// SVG Components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your English in <span className="text-yellow-300">365 Days</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl">Join the Global Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop dreaming about fluent English. Start living it. Join thousands of successful learners 
            who&apos;ve transformed their lives through daily practice and community support.
          </p>
          
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-semibold mb-3 text-gray-900">
              Why thousands choose this challenge?
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Simple daily exercises that work for everyone. Learn together, 
              practice together, and get certificates to show your progress!
            </p>
          </div>
          
          <a href="#pricing" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 md:px-10 rounded-lg text-lg shadow-lg transition-all transform hover:scale-105">
            Start Your Transformation Today
          </a>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Your English dreams are dying because of <span className="text-red-600">one simple truth</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            You&apos;ve tried apps, courses, and platforms. But they all miss the two things that actually 
            create fluency: daily practice and real human connection.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">The Brutal Reality</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">YOU&apos;RE PRACTICING ALONE</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-lg md:text-xl font-bold text-red-900 mb-2">Why 95% of learners fail</h4>
              <p className="text-red-800 text-sm md:text-base">
                They start with motivation but lose momentum when there&apos;s no one to practice with 
                and no system to keep them accountable. Sound familiar?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            THE PROVEN SYSTEM THAT CREATES FLUENT SPEAKERS
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                STEP 1: GET YOUR PERSONALIZED SUCCESS ROADMAP
              </h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Start with our battle-tested workbook that adapts to your current English level. 
                This isn&apos;t a rigid curriculum - it&apos;s your personal roadmap to fluency.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  The workbook includes daily exercises, progress tracking, and self-assessment tools 
                  that help you identify exactly where you need to focus.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Daily speaking prompts and exercises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Progress tracking sheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Self-assessment checkpoints</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                STEP 2: JOIN THE GLOBAL PRACTICE COMMUNITY
              </h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Connect with learners worldwide in our Telegram community. Practice daily, 
                get feedback, and build the accountability that keeps you motivated.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                <strong>This is where the magic happens.</strong> When you practice with real people 
                every day, your confidence explodes.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                No more practicing alone. No more losing motivation. You&apos;ll have a community 
                of people who understand your journey and push you to succeed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                STEP 3: BUILD UNSTOPPABLE MOMENTUM
              </h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                The first 90 days are crucial. Most people give up here because they don&apos;t see 
                immediate results or lose motivation.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Our system focuses on <strong>Daily Wins</strong> - small achievements that compound into massive results.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Complete a speaking exercise. Have a conversation in the community. Track your progress. 
                These daily wins create unstoppable momentum over 365 days.
              </p>
              <p className="text-gray-700 mt-4 font-semibold text-sm md:text-base">
                When you see progress every day, giving up becomes impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Minutes Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            JUST 15 MINUTES A DAY CHANGES EVERYTHING
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-4">
            Our workbook is designed for busy people who want results. Each daily exercise takes just 15 minutes, 
            but the impact is life-changing when combined with community practice.
          </p>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            No complex platforms to learn. No rigid schedules. Just 15 minutes with your workbook, 
            plus time in the community practicing with real people.
          </p>
          <p className="text-xl md:text-2xl font-bold text-yellow-300">
            Everyone has 15 minutes. The question is: will you invest them in your future?
          </p>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 p-6 md:p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4">
                THE OLD WAY (WHY YOU&apos;RE STUCK)
              </h3>
              <p className="text-red-800 text-sm md:text-base">
                Expensive platforms with rigid lessons. You learn alone, lose motivation quickly, 
                and never build the confidence to speak in real situations. Most people quit 
                within the first few months, feeling like failures.
              </p>
            </div>

            {/* After */}
            <div className="bg-green-50 p-6 md:p-8 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                THE AFRIN WAY (YOUR PATH TO SUCCESS)
              </h3>
              <p className="text-green-800 text-sm md:text-base">
                A flexible workbook that adapts to your level, plus a supportive community where 
                you practice daily with real people. You build confidence through actual conversations 
                and stay motivated through accountability.
              </p>
              <p className="text-green-800 mt-4 font-semibold text-sm md:text-base">
                The combination of structured self-study and community practice creates unstoppable momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            HOW THE 365-DAY TRANSFORMATION WORKS
          </h2>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              The challenge is simple but powerful. You get a comprehensive workbook with 365 days 
              of exercises, plus access to our Telegram community for daily practice.
            </p>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              Each day, you complete exercises from your workbook, then practice what you&apos;ve learned 
              in the community. The workbook adapts to your progress, and the community provides 
              the accountability you need to succeed.
            </p>
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              No complex platforms. No rigid curriculum. Just proven exercises and real community support.
            </p>
          </div>
          
          <p className="text-center text-lg md:text-xl text-gray-700 mb-8">
            In 365 days, you&apos;ll have built the habit of daily English practice and the confidence 
            to speak fluently in any situation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">YOUR PERSONALIZED SUCCESS ROADMAP</h3>
              <p className="text-blue-800 text-sm md:text-base">
                A comprehensive workbook with daily exercises that adapt to your current level. 
                Includes speaking prompts, vocabulary building, grammar practice, and progress tracking.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-purple-900 mb-4">DAILY COMMUNITY PRACTICE</h3>
              <p className="text-purple-800 text-sm md:text-base">
                Join our Telegram community where you practice daily with learners worldwide. 
                Get feedback, build confidence, and stay motivated through real conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Sarah from Brazil</h3>
            <p className="text-blue-100 text-base md:text-lg">
              &ldquo;I tried so many apps and platforms, but I always quit after a few weeks. 
              The workbook keeps me focused, and the community keeps me motivated. After 6 months, 
              I can finally speak English with confidence at work! My colleagues can&apos;t believe the change.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            YOUR COMPLETE TRANSFORMATION PACKAGE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Workbook Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl text-center border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">YOUR SUCCESS ROADMAP</h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base text-left max-w-xs mx-auto">
                <li>• 365 daily exercises and speaking prompts</li>
                <li>• Progress tracking sheets</li>
                <li>• Self-assessment tools</li>
                <li>• Vocabulary and grammar guides</li>
                <li>• Lifetime access to all materials</li>
                <li>• Achievement certificates</li>
              </ul>
            </div>
            
            {/* Community Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl text-center border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">GLOBAL PRACTICE COMMUNITY</h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base text-left max-w-xs mx-auto">
                <li>• Daily practice with learners worldwide</li>
                <li>• Feedback and support from peers</li>
                <li>• Weekly challenges and activities</li>
                <li>• Motivation and accountability</li>
                <li>• Success stories and tips</li>
                <li>• Progress celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            7-DAY RISK-FREE GUARANTEE
          </h2>
          <p className="text-lg md:text-xl text-green-100">
            Try the challenge for 7 days. If you don&apos;t love the workbook and community, 
            we&apos;ll refund your purchase, no questions asked. Your success is our priority.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            CHOOSE YOUR PATH TO FLUENCY
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12">
            Start your transformation today. Choose the option that fits your commitment level.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self Study Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Self Study</h3>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">$9</div>
                  <div className="text-gray-500 line-through text-sm md:text-base">$39</div>
                  <div className="text-sm text-green-600 font-medium">77% OFF</div>
                </div>
                <ul className="space-y-3 text-left text-sm md:text-base">
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>365-Day Challenge Workbook</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Daily Progress Tracking Sheets</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Speaking Prompts & Exercises</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Vocabulary & Grammar Guides</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Lifetime Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Achievement Certificates</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 rounded-lg transition-colors text-base md:text-lg transform hover:scale-105">
                  Start My Journey - $9
                </button>
              </div>
            </div>
            
            {/* Community Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-xl relative">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-yellow-400 text-gray-900 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg border-2 border-white">MOST POPULAR</span>
              </div>
              <div className="text-center space-y-4 mt-4 md:mt-8">
                <h3 className="text-xl md:text-2xl font-bold">Community Challenge</h3>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold">$49</div>
                  <div className="text-purple-200 line-through text-sm md:text-base">$99</div>
                  <div className="text-sm text-yellow-300 font-medium">50% OFF</div>
                </div>
                <ul className="space-y-3 text-left text-sm md:text-base">
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Everything in Self Study</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Telegram Community Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Daily Practice Partners</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Weekly Challenges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Motivation & Accountability</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Success Stories & Tips</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>Progress Certificates</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 md:py-4 px-6 rounded-lg transition-colors text-base md:text-lg transform hover:scale-105">
                  Join the Community - $49
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center mb-2 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">Afrin English Challenge</span>
          </div>
          <p className="text-blue-100 text-base md:text-lg mb-2">
            Transform your English in 365 days with structured self-study and community support.
          </p>
          <div className="border-t border-blue-700 my-6 w-2/3 mx-auto"></div>
          <p className="text-blue-200 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Afrin English Challenge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
