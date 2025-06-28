// SVG Components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Transform Your English in <span className="text-yellow-300">365 Days</span>
            <br className="hidden sm:block" />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block mt-2 md:mt-3">Join the Global Community</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop dreaming about fluent English. Start living it. Join thousands of successful learners 
            who&apos;ve transformed their lives through daily practice and community support.
          </p>
          
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white border-opacity-20 max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="text-base sm:text-lg font-semibold mb-3 text-gray-900">
              Why thousands choose this challenge?
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Simple daily exercises that work for everyone. Learn together, 
              practice together, and get certificates to show your progress!
            </p>
          </div>
          
          <a href="#pricing" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg text-base sm:text-lg shadow-lg transition-all transform hover:scale-105">
            Start Your Transformation Today
          </a>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Your English dreams are dying because of <span className="text-red-600">one simple truth</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
            You&apos;ve tried apps, courses, and platforms. But they all miss the two things that actually 
            create fluency: daily practice and real human connection.
          </p>
          
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The Brutal Reality</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 md:mb-6">YOU&apos;RE PRACTICING ALONE</h2>
            
            <div className="bg-red-50 p-4 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-red-900 mb-2 md:mb-3">Why 95% of learners fail</h4>
              <p className="text-red-800 text-sm sm:text-base leading-relaxed">
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
            THE SCIENCE-BACKED SYSTEM THAT CREATES FLUENT SPEAKERS
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
            Everyone has 15 minutes. The real question is: what will you do with yours?
          </p>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Before */}
            <div className="bg-red-50 p-4 sm:p-6 md:p-8 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-700 mb-4 md:mb-6">
                THE OLD WAY (WHY YOU&apos;RE STUCK)
              </h3>
              <p className="text-red-800 text-sm sm:text-base leading-relaxed">
                Expensive platforms with rigid lessons. You learn alone, lose motivation quickly, 
                and never build the confidence to speak in real situations. Most people quit 
                within the first few months, feeling like failures.
              </p>
            </div>

            {/* After */}
            <div className="bg-green-50 p-4 sm:p-6 md:p-8 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700 mb-4 md:mb-6">
                THE AFRIN WAY (YOUR PATH TO SUCCESS)
              </h3>
              <p className="text-green-800 text-sm sm:text-base leading-relaxed">
                A flexible workbook that adapts to your level, plus a supportive community where 
                you practice daily with real people. You build confidence through actual conversations 
                and stay motivated through accountability.
              </p>
              <p className="text-green-800 mt-4 md:mt-6 font-semibold text-sm sm:text-base leading-relaxed">
                The combination of structured self-study and community practice creates unstoppable momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16 leading-tight">
            HOW THE 365-DAY TRANSFORMATION WORKS
          </h2>
          
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-8 md:mb-12 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base leading-relaxed">
              The challenge is simple but powerful. You get a comprehensive workbook with 365 days 
              of exercises, plus access to our Telegram community for daily practice.
            </p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base leading-relaxed">
              Each day, you complete exercises from your workbook, then practice what you&apos;ve learned 
              in the community. The workbook adapts to your progress, and the community provides 
              the accountability you need to succeed.
            </p>
            <p className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed">
              No complex platforms. No rigid curriculum. Just proven exercises and real community support.
            </p>
          </div>
          
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            In 365 days, you&apos;ll have built the habit of daily English practice and the confidence 
            to speak fluently in any situation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-4">YOUR PERSONALIZED SUCCESS ROADMAP</h3>
              <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
                A comprehensive workbook with daily exercises that adapt to your current level. 
                Includes speaking prompts, vocabulary building, grammar practice, and progress tracking.
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-900 mb-4">DAILY COMMUNITY PRACTICE</h3>
              <p className="text-purple-800 text-sm sm:text-base leading-relaxed">
                Join our Telegram community where you practice daily with learners worldwide. 
                Get feedback, build confidence, and stay motivated through real conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-12 md:py-16 lg:py-20 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            7-DAY RISK-FREE GUARANTEE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Try the challenge for 7 days. If you don&apos;t love the workbook and community, 
            we&apos;ll refund your purchase, no questions asked. Your success is our priority.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your Path to Fluency
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start your transformation today. Choose the option that fits your commitment level and begin your journey to English fluency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Self Study Plan */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="text-center space-y-6 flex-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Self Study</h3>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">$9</div>
                  <div className="text-gray-400 line-through text-base sm:text-lg">$39</div>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">77% OFF</div>
                </div>
                <div className="border-t border-gray-100 pt-6 flex-1">
                  <ul className="space-y-3 md:space-y-4 text-left text-sm sm:text-base">
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">365-Day Challenge Workbook</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">Daily Progress Tracking Sheets</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">Speaking Prompts & Exercises</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">Vocabulary & Grammar Guides</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">Lifetime Access</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-gray-700">Achievement Certificates</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl mt-6">
                Start My Journey
              </button>
            </div>
            
            {/* Community Plan */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-visible flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl border-2 border-white/20 backdrop-blur-sm">MOST POPULAR</span>
              </div>
              <div className="relative z-10 text-center space-y-6 pt-4 flex-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-white/30">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Community Challenge</h3>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">$49</div>
                  <div className="text-purple-200 line-through text-base sm:text-lg">$99</div>
                  <div className="inline-block bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-300/30">50% OFF</div>
                </div>
                <div className="border-t border-white/20 pt-6 flex-1">
                  <ul className="space-y-3 md:space-y-4 text-left text-sm sm:text-base">
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Everything in Self Study</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Telegram Community Access</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Daily Practice Partners</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Weekly Challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Motivation & Accountability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Success Stories & Tips</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckIcon />
                      <span>Progress Certificates</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-xl hover:shadow-2xl mt-6">
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-white/20">
                <svg className="w-6 h-6 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Afrin English Challenge</h2>
              <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Transform your English in 365 days with structured self-study and community support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Proven System</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Battle-tested methods that work for everyone</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Global Community</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Connect with learners worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Daily Progress</h3>
                <p className="text-blue-200 text-xs sm:text-sm">See your improvement every single day</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700/50 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-xs sm:text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Afrin English Challenge. All rights reserved.
              </p>
              <div className="flex space-x-4 md:space-x-6">
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-xs sm:text-sm">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
