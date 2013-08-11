desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  fail "Build failed. Check the tracelog above." unless status
end

desc "Run the preview server at http://localhost:4567"
task :preview do
  system("middleman server")
end

desc "Deploy website via ftp"
task :deploy do
  puts "## Deploying website via ftp..."
  status = system("middleman deploy")
  fail "Deploying failed. Check the tracelog above." unless status
end

desc "Build and deploy website"
task :gen_deploy => [:build, :deploy] do
end

task :default => :build