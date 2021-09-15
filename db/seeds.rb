# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Appointment.destroy_all
Doctor.destroy_all
User.destroy_all

doctors = Doctor.create([{name:"Dr. Thomas Wayne"},
{name:"Dr. Jane Doe"},
{name:"Dr. Stephen Strange"}])

3.times do |i|
  user = User.create(name: Faker::Name.name)
  Appointment.create(date: Faker::Time.forward(days: 30, period: :afternoon), desc: "Regular Check up" ,user_id: user.id, doctor_id: doctors[0].id)
  Appointment.create(date: Faker::Time.forward(days: 30, period: :morning), desc: "Dental Check up" ,user_id: user.id, doctor_id: doctors[1].id)
  Appointment.create(date: Faker::Time.forward(days: 30, period: :evening), desc: "Eye Perscription" ,user_id: user.id, doctor_id: doctors[2].id)
end

puts "Appointment size: #{Appointment.all.length}"
puts "User size: #{User.all.length}"
puts "Doctor size: #{Doctor.all.length}"