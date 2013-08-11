desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Run the preview server at http://localhost:4567"
task :preview do
  system("middleman server")
end

desc "Deploy website via ftp"
task :deploy do
  puts "## Deploying website via ftp..."
  status = system("middleman deploy")
  puts status ? "OK" : "FAILED"
end

desc "Build and deploy website"
task :gen_deploy => [:build, :deploy] do
end

task :default => :build