var elStartingPoint = document.querySelector('#StartingPoint');
var elResetInit = document.querySelector('#ResetInit');
var elReusable = document.querySelector('#Reusable');
var elBooster = document.querySelector('#Booster');
var elAir_Launch = document.querySelector('#Air_Launch');
var elStarting_point_Altitude = document.querySelector('#Starting_point_Altitude');
var elAdditional_Speed = document.querySelector('#Additional_Speed');
var elOrbit_Perigee = document.querySelector('#Orbit_Perigee');
var elOrbit_Apogee = document.querySelector('#Orbit_Apogee');
var elSpaceport_latitude = document.querySelector('#Spaceport_latitude');
var elOrbit_Inclination = document.querySelector('#Orbit_Inclination');

var elIntermediate_angle = document.querySelector('#Intermediate_angle');
var elLaunch_azimuth = document.querySelector('#Launch_azimuth');
var elLaunch_point_speed = document.querySelector('#Launch_point_speed');
var elStarting_point_Altitude_orbital_velocity = document.querySelector('#Starting_point_Altitude_orbital_velocity');
var elAbsolute_orbital_velocity = document.querySelector('#Absolute_orbital_velocity');
var elOrbital_period = document.querySelector('#Orbital_period');
var elTransfer_time = document.querySelector('#Transfer_time');

var elApogee_velocity = document.querySelector('#Apogee_velocity');
var elPerigee_velocity = document.querySelector('#Perigee_velocity');
var elVsp_for_inclination_change = document.querySelector('#Vsp_for_inclination_change');

var elOrbital_velocity = document.querySelector('#Orbital_velocity');
var elOrbital_velocity_increment_due_to_the_Earth_rotation = document.querySelector('#Orbital_velocity_increment_due_to_the_Earth_rotation');
var elVsp_for_circular_orbit = document.querySelector('#Vsp_for_circular_orbit');
var elInjection_velocity = document.querySelector('#Injection_velocity');
var elVsp_for_target_orbit = document.querySelector('#Vsp_for_target_orbit');
var elVsp_for_LEO = document.querySelector('#Vsp_for_LEO');

var elOrbit = document.querySelector('#Orbit');

//=== ROCKET ===
var elRocket = document.querySelector('#Rocket');
var elAbs_Calculation = document.querySelector('#Abs_Calculation');
var elRocketDescription = document.querySelector('#RocketDescription');
var elOrbitDescription = document.querySelector('#OrbitDescription');
var elThrust_to_weight_ratio = document.querySelector('#Thrust_to_weight_ratio');
var elThrust_to_weight_ratio_2nd = document.querySelector('#Thrust_to_weight_ratio_2nd');

var elRocket_Mass = document.querySelector('#Rocket_Mass');
var elLift_off_Mass = document.querySelector('#Lift_off_Mass');
var elMax_midsection_D = document.querySelector('#Max_midsection_D');
var elFairing_mass = document.querySelector('#Fairing_mass');
var elFairing_jettison_velocity = document.querySelector('#Fairing_jettison_velocity');
var elFairing_jettison_delta_v = document.querySelector('#Fairing_jettison_delta_v');
var elJettisoned_battery_mass = document.querySelector('#Jettisoned_battery_mass');

var elAssumed_payload_mass = document.querySelector('#Assumed_payload_mass');
var elPayload_to_Lift_off_mass_ratio = document.querySelector('#Payload_to_Lift_off_mass_ratio');
var el2nd_Stage_mass_ratio = document.querySelector('#_2nd_Stage_mass_ratio');
var el3rd_Stage_mass_ratio = document.querySelector('#_3rd_Stage_mass_ratio');
var elOrb_Stage_mass_ratio = document.querySelector('#_Orb_Stage_mass_ratio');
var el1st_Dry_to_Wet_mass_ratio_Range = document.querySelector('#_1st_Dry_to_Wet_mass_ratio_Range');
var el1st_Dry_to_Wet_mass_ratio = document.querySelector('#_1st_Dry_to_Wet_mass_ratio');
var el2nd_Dry_to_Wet_mass_ratio_Range = document.querySelector('#_2nd_Dry_to_Wet_mass_ratio_Range');
var el2nd_Dry_to_Wet_mass_ratio = document.querySelector('#_2nd_Dry_to_Wet_mass_ratio');
var el3rd_Dry_to_Wet_mass_ratio_Range = document.querySelector('#_3rd_Dry_to_Wet_mass_ratio_Range');
var el3rd_Dry_to_Wet_mass_ratio = document.querySelector('#_3rd_Dry_to_Wet_mass_ratio');
var elOrb_Dry_to_Wet_mass_ratio_Range = document.querySelector('#_Orb_Dry_to_Wet_mass_ratio_Range');
var elOrb_Dry_to_Wet_mass_ratio = document.querySelector('#_Orb_Dry_to_Wet_mass_ratio');
var elUnused_propellant_of_1st_Stage_Range = document.querySelector('#Unused_propellant_of_1st_Stage_Range');
var elUnused_propellant_of_1st_Stage = document.querySelector('#Unused_propellant_of_1st_Stage');
var elUnused_propellant_of_2nd_Stage_Range = document.querySelector('#Unused_propellant_of_2nd_Stage_Range');
var elUnused_propellant_of_2nd_Stage = document.querySelector('#Unused_propellant_of_2nd_Stage');
var elUnused_propellant_of_3rd_Stage_Range = document.querySelector('#Unused_propellant_of_3rd_Stage_Range');
var elUnused_propellant_of_3rd_Stage = document.querySelector('#Unused_propellant_of_3rd_Stage');
var elUnused_propellant_of_Transfer_Orbit_Stage_Range = document.querySelector('#Unused_propellant_of_Transfer_Orbit_Stage_Range');
var elUnused_propellant_of_Transfer_Orbit_Stage = document.querySelector('#Unused_propellant_of_Transfer_Orbit_Stage');

var elFirst_stage_engine_thrust = document.querySelector('#First_stage_engine_thrust');
var elFirst_stage_engines_number = document.querySelector('#First_stage_engines_number');
var elFirst_stage_isp_sea_level_Range = document.querySelector('#First_stage_isp_sea_level_Range');
var elFirst_stage_isp_sea_level = document.querySelector('#First_stage_isp_sea_level');
var elFirst_stage_isp_vac_Range = document.querySelector('#First_stage_isp_vac_Range');
var elFirst_stage_isp_vac = document.querySelector('#First_stage_isp_vac');
var elSecond_stage_engine_thrust = document.querySelector('#Second_stage_engine_thrust');
var elSecond_stage_engines_number = document.querySelector('#Second_stage_engines_number');
var elSecond_stage_isp_sea_level_Range= document.querySelector('#Second_stage_isp_sea_level_Range');
var elSecond_stage_isp_sea_level = document.querySelector('#Second_stage_isp_sea_level');
var elSecond_stage_isp_vac_Range= document.querySelector('#Second_stage_isp_vac_Range');
var elSecond_stage_isp_vac = document.querySelector('#Second_stage_isp_vac');
var elThird_stage_isp_Range= document.querySelector('#Third_stage_isp_Range');
var elThird_stage_isp = document.querySelector('#Third_stage_isp');
var elTransfer_Orbit_Stage_isp_Range = document.querySelector('#Transfer_Orbit_Stage_isp_Range');
var elTransfer_Orbit_Stage_isp = document.querySelector('#Transfer_Orbit_Stage_isp');
var elSpecific_Impulse_Variation_Range = document.querySelector('#Specific_Impulse_Variation_Range');
var elSpecific_Impulse_Variation = document.querySelector('#Specific_Impulse_Variation');

var elExtra_speed_for_flight_to_the_planets = document.querySelector('#Extra_speed_for_flight_to_the_planets');

var elEngine1 = document.querySelector('#Engine1');
var elEngine2 = document.querySelector('#Engine2');

var elCycle = document.querySelector('#Cycle');
var elCycle2 = document.querySelector('#Cycle2');
var elCycle3 = document.querySelector('#Cycle3');
var elCycleO = document.querySelector('#CycleO');
var elFuel = document.querySelector('#Fuel');
var elFuel2 = document.querySelector('#Fuel2');
var elFuel3 = document.querySelector('#Fuel3');
var elFuelO = document.querySelector('#FuelO');
var elStages = document.querySelector('#Stages');

//=== Losses ===
var elGravity_losses_at_specific_altitude = document.querySelector('#Gravity_losses_at_specific_altitude');
var elAscent_Time = document.querySelector('#Ascent_Time');
var elGravity_losses = document.querySelector('#Gravity_losses');
var elAerodynamic_losses = document.querySelector('#Aerodynamic_losses');
var elPressure_losses = document.querySelector('#Pressure_losses');
var elSummary_losses = document.querySelector('#Summary_losses');
var elAssumed_losses = document.querySelector('#Assumed_losses');
var elVsp_with_losses = document.querySelector('#Vsp_with_losses');

//=== Output ===

var elFirst_stage_average_trajectory_isp = document.querySelector('#First_stage_average_trajectory_isp');
var elFirst_stage_delta_v = document.querySelector('#First_stage_delta_v');
var elFirst_stage_final_mass = document.querySelector('#First_stage_final_mass');
var elFirst_stage_propellant_mass = document.querySelector('#First_stage_propellant_mass');
var elFirst_stage_dry_mass = document.querySelector('#First_stage_dry_mass');
var elFirst_stage_total_thrust = document.querySelector('#First_stage_total_thrust');
var elFirst_stage_total_impulse = document.querySelector('#First_stage_total_impulse');
var elFirst_stage_run_time = document.querySelector('#First_stage_run_time');
var elFirst_stage_max_acc = document.querySelector('#First_stage_max_acc');

var elSecond_stage_delta_v = document.querySelector('#Second_stage_delta_v');
var elSecond_stage_total_Start_mass = document.querySelector('#Second_stage_total_Start_mass');
var elSecond_stage_total_mass_before_fairing_jettison = document.querySelector('#Second_stage_total_mass_before_fairing_jettison');
var elSecond_stage_total_mass_before_battery_jettison = document.querySelector('#Second_stage_total_mass_before_battery_jettison');
var elSecond_stage_delta_v_before_battery_jettison = document.querySelector('#Second_stage_delta_v_before_battery_jettison');

var elSecond_stage_final_mass = document.querySelector('#Second_stage_final_mass');
var elSecond_stage_propellant_mass = document.querySelector('#Second_stage_propellant_mass');
var elSecond_stage_dry_mass = document.querySelector('#Second_stage_dry_mass');
var elSecond_stage_total_thrust = document.querySelector('#Second_stage_total_thrust');
var elSecond_stage_total_impulse = document.querySelector('#Second_stage_total_impulse');
var elSecond_stage_run_time = document.querySelector('#Second_stage_run_time');
var elSecond_stage_max_acc = document.querySelector('#Second_stage_max_acc');

var elThird_stage_delta_v = document.querySelector('#Third_stage_delta_v');
var elThird_stage_total_Start_mass = document.querySelector('#Third_stage_total_Start_mass');
var elThird_stage_final_mass = document.querySelector('#Third_stage_final_mass');
var elThird_stage_propellant_mass = document.querySelector('#Third_stage_propellant_mass');
var elThird_stage_dry_mass = document.querySelector('#Third_stage_dry_mass');
var elThird_stage_total_impulse = document.querySelector('#Third_stage_total_impulse');

var elTransfer_Orbit_stage_delta_v_required = document.querySelector('#Transfer_Orbit_stage_delta_v_required');
var elTransfer_Orbit_stage_total_Start_mass = document.querySelector('#Transfer_Orbit_stage_total_Start_mass');
var elTransfer_Orbit_stage_final_mass = document.querySelector('#Transfer_Orbit_stage_final_mass');
var elTransfer_Orbit_stage_propellant_mass = document.querySelector('#Transfer_Orbit_stage_propellant_mass');
var elTransfer_Orbit_stage_dry_mass = document.querySelector('#Transfer_Orbit_stage_dry_mass');
var elTransfer_Orbit_stage_total_impulse = document.querySelector('#Transfer_Orbit_stage_total_impulse');
var elCalculation_Error = document.querySelector('#Calculation_Error');

var elPayload_mass_calculated  = document.querySelector('#Payload_mass_calculated');
var elAggressivity = document.querySelector('#Aggressivity');
var elPayload_change = document.querySelector('#Payload_change');
var elLast_Payload_change = document.querySelector('#Last_Payload_change');
var elExpand = document.querySelector('#Expand');
var elsExpanding = document.querySelectorAll('.content tr[class="Expanding"]');
var elsExpanding2 = document.querySelectorAll('.content tr[class="Expanding2"]');
var elsExpandingB = document.querySelectorAll('.content tr[class="ExpandingB"]');
var elsExpanding3 = document.querySelectorAll('.content tr[class="Expanding3"]');
var elsExpanding4 = document.querySelectorAll('.content tr[class="Expanding4"]');
var els2stages = document.querySelectorAll('.content tr[class="f2stages"]');
var els3stages = document.querySelectorAll('.content tr[class="f3stages"]');
var els4stages = document.querySelectorAll('.content tr[class="f4stages"]');
var elsBooster = document.querySelectorAll('.content tr[class="Booster"]');
var elsElectric = document.querySelectorAll('.content tr[class="Electric"]');
var elsGEO = document.querySelectorAll('.content tr[class="fGEO"]');
var elsGEOI = document.querySelectorAll('.content tr[class="fGEOI"]');
var elNearEarth = document.querySelectorAll('.content tr[class="NearEarth"]');
var elInterplanetary = document.querySelectorAll('.content tr[class="Interplanetary"]');
var elLimitation = document.querySelector('#Limitation');
var elSet_averages = document.querySelector('#Set_averages');
var elSet_AllMin = document.querySelector('#Set_AllMin');
var elSet_AllMax = document.querySelector('#Set_AllMax');
var elProjecting = document.querySelectorAll('.content tr[class="Projecting"]');
var elProjectingH = document.querySelectorAll('.content tr[class="ProjectingH"]');
var elNegativePayload = document.querySelectorAll('.content tr[class="NegativePayload"]');
var elTooHighAggressivity = document.querySelectorAll('.content tr[class="TooHighAggressivity"]');

var elRequired = document.querySelector('#Required');
//	Abs_Calculation.checked = false;
//	var Irremovable_Gravity_Losses;
var s_designed_first = false;
var Orig_Orbit_Index = 0;
var Vsp_for_target_orbit;
var Payload_mass;
var Last_Payload_mass;
var AirLaunch_Thrust_gain = 1.;
var Starting_point_Altitude_Old = 0.1;
var Orbit_Inclination = "";
var Aggressivity = 0.;
var Specific_Impulse_Variation_old = 100.;
var Reus_corr = 0;
var First_stage_run_time = 0.;
var Second_stage_run_time = 0.;
var Second_stage_prop_used_with_booster = 0.;
var First_stage_isp_vac_summ = 300.;
var Engine1_Index = 0;
var Engine2_Index = 0;
var Export_count = 0;

const params = new URLSearchParams(window.location.search);
var rocket = params.get('rocket'); // will return the value of the parameter rocket
var rdata = params.get('rdata'); // will return the value of the parameter rdata
var edata = params.get('edata'); // will return the value of the parameter edata
if(rocket == null) rocket = "NS1";
if(rdata != null) rocket = "NEW";
//	if(edata != null) rocket = "CST";

window.onload = onPageLoad;
window.onunload = onPageUnload;

var s_start_point_count = 23;
var s_start_point_data = [["Cape Canaveral",	28.6083,  -80.6043,  	0.1,	32.6, "USA East Coast (28.6083,-80.6043)"],
			  ["Vandenberg",   	34.7545, -120.6189,	0.11,	34.76,"USA West Coast, basicall polar orbit (34.7545,-120.6189)"],
			  ["Wallops",   	37.83382,-75.4877,	0,	37.83,"Wallops Island USA (37.83382,-75.4877)"],
			  ["Kodiak",	   	57.43, -152.33,   0,  57.43,"Kodiak Island Alaska (57.43,-152.33)"],
			  ["Mojave",	   	35.0,  -118,      0,  35.,  "California USA (35.0,-118)"],
			  ["Rocket Lab LC-1",  -39.262, 177.865, 0.1, 39.27,"New Zealand's Mahia Peninsula (-39.262,177.865)"],
			  ["Omelek Island",    	  9.3,  167.73,   0,   9.3, "Republic of the Marshall Islands (9.3,167.73)"],
			  ["Puerto Rico",    	18.26,   65.61,   0,  18.26,"USA, access to all orbital inclinations (18.26,65.61)"],
			  ["BO Corn Ranch",	31.42,-104.76, 1.23, 31.42,"Blue Origin spaceport USA (31.42,-104.76)"],
			  ["SpaceX Boca Chica",	26.,	-97.15,	0.1,  26.0,"SpaceX South Texas Launch Site (26.0,-97.15)"],
			  ["Baikonur",		45.9203,  63.3422,  0.1,  51.6,"Kazakhstan, former USSR (45.9203,63.3422)"],
			  ["Sea Launch (Equator)", 0.,  -154.0, 0.02,  0.0,"Best way to reach geosynchronous orbit (0.0,-154.0)"],
			  ["Kuru (ESA)",       	 5.2395,-52.7684, 0.01,  5.24,"French Guiana (5.2395,-52.7684)"],
			  ["Jiuquan (China)",    41.47, 100.28,  1., 41.47,"China (41.95,100.28)"],
			  ["Wenchang (China)",    19.37, 110.57,  1., 19.37,"China (19.37,110.57)"],
			  ["Shriharikota (India)",13.79, 80.25, 0.1, 44.,  "India (13.79,80.25)"],
			  ["Alcantara (Brazil)", -2.28, -44.38,  .05, 2.28,"Brazil (-2.28,-44.38)"],
			  ["Tanegashima (Japan)", 30.4,  131.7, 0.1, 30.4, "Japan (30.4,131.7)"],
			  ["Naro (South Korea)", 34.2592, 127.3201, 0, 34.26, "Outer Naro Island (34.2592,127.3201)"],
			  ["Stornoway (UK)", 	58.2,	6.3,	 0,  58.2, "Isle of Lewis, Scotland (58.2,6.3)"],
			  ["SaxaVord (UK)", 	60.8,	0.77,	 0,  60.8, "Unst Island, Scotland (60.8184,0.7692)"],
			  ["Andoya Norway", 	69.3,	16.0,	 0,  69.3, "Northern Norway (69.2944,16.0198)"],
			  ["TiSpace Space Port", 	22.261,	120.89,	 0,  22.3, "Taiwan  (22.26,120.89)"]];


var s_orbit_count = 14;
var s_orbit_data = [["LEO",  200,     0,-1,  0,		0,"Low Earth orbit"],
		   ["ISS",   409,   418,51.6,0,		0,"International Space Station orbit"],
		   ["SSO",   500,     0, 98, 0,		0,"Sun-synchronous orbit"],
		   ["MEO",   20200,   0, 55, 0,		0,"Medium Earth orbit (GPS satellites)"],
		   ["GTO",   200, 35786, -1, 0,		0,"Geosynchronous transfer orbit"],
		   ["GEO",   35786,   0, -1, 0,		0,"Geosynchronous equatorial orbit"],
		   ["HCO or C3=0",   200,     0, -1, 3150.6, 	0,"Heliocentric Orbit (escape velocity)"],
		   ["L1",    200,     0, -1, 3300., 8726400.,"Sun-Earth Lagrange Point 1"],
		   ["Moon",  200,     0, -1, 3100  ,283107,"Trans-Lunar injection orbit"],
		   ["Mars",  200,     0, -1, 3613,11318400,"Trans-Mars injection orbit"],
		   ["Venus", 200,     0, -1, 3506, 8380800,"Trans-Venus injection orbit"],
		   ["Mercury",200,     0, -1, 5554, 9115200,"Trans-Mercury injection orbit"],
		   ["Jupiter",200,     0, -1, 6304, 86185100,"Trans-Jupiter injection orbit"],
		   ["Pluto", 200,     0, -1, 8364, 1438865550,"Trans-Pluto injection orbit"]];
// To reduce the required Vsp, a gravity assist maneuver from Jupiter is usually used
						  
var s_stages_count = 4;
var s_stages_name = ["1", "2", "3", "4"];
                                                                
var s_fuel_count = 11;
var s_fuel_name = [["Lox/Kerosene", "Liquid oxygen/Kerosene - most common rocket propellants"], 
		   ["Lox/Methane", "Liquid oxygen/Methane - very popular thanks to Musk"], 
		   ["Lox/LH2", "Liquid oxygen/Hydrogen - most efficient rocket fuel"], 
		   ["Lox/Syntin", "Liquid oxygen/Syntin - the most efficient hydrocarbon fuel"],
		   ["Lox/Propane", "Liquid oxygen/Propane - very similar to  Lox/Kerosene"],
		   ["HTP/Kerosene", "Hydrogen peroxide/Kerosene - not cryogenic, eco-friendly"],
		   ["NTO/MMH", "Nitrogen TetrOxide MonoMethylHydrazine - highly toxic hypergolic propellants"],
		   ["NTO/UDMH", "Nitrogen TetrOxide Unsymmetrical DiMethylHydrazine - highly toxic hypergolic propellants"],
		   ["Monopropellant", "Consisted of chemicals that release energy through exothermic reactions"], 
		   ["N2O/C2H6", "Nitrous oxide/Ethane - Self pressurization propellants"],
		   ["Solid", "Solid propellant - Often used for missiles"]];
var s_cycle_count = 4;
var s_cycle_name =     [["Staged Combustion","Most effective but more difficult to design cycle"],
			["Gas-Generator","Most common average efficiency cycle"],
			["Electric","Provides close to open cycle efficiency in case of jettison of used batteries"],
			["Pressure Fed","The simplest cycle with low efficiency"]];
var s_fuel_invert = [1,1,1,1,1,1,1,1, 0,0,0,0,0,0];
var s_slider = [el1st_Dry_to_Wet_mass_ratio_Range, el2nd_Dry_to_Wet_mass_ratio_Range, el3rd_Dry_to_Wet_mass_ratio_Range, elOrb_Dry_to_Wet_mass_ratio_Range, elUnused_propellant_of_1st_Stage_Range,
				elUnused_propellant_of_2nd_Stage_Range, elUnused_propellant_of_3rd_Stage_Range, elUnused_propellant_of_Transfer_Orbit_Stage_Range, elFirst_stage_isp_sea_level_Range,
				elFirst_stage_isp_vac_Range, elSecond_stage_isp_sea_level_Range, elSecond_stage_isp_vac_Range, elThird_stage_isp_Range, elTransfer_Orbit_Stage_isp_Range, elSpecific_Impulse_Variation_Range];
var s_slider_edit = [el1st_Dry_to_Wet_mass_ratio, el2nd_Dry_to_Wet_mass_ratio, el3rd_Dry_to_Wet_mass_ratio, elOrb_Dry_to_Wet_mass_ratio, elUnused_propellant_of_1st_Stage,
				elUnused_propellant_of_2nd_Stage, elUnused_propellant_of_3rd_Stage, elUnused_propellant_of_Transfer_Orbit_Stage, elFirst_stage_isp_sea_level,
				elFirst_stage_isp_vac, elSecond_stage_isp_sea_level, elSecond_stage_isp_vac, elThird_stage_isp, elTransfer_Orbit_Stage_isp, elSpecific_Impulse_Variation];

var s_cycle_data = [[ 1.,   1.,   1.,   1.,   1.,   1.  ],  //Staged
		    [ 0.89, 0.92, 0.89, 0.95, 0.95, 0.95],  //Gas-Gen
		    [ 0.85, 0.90, 0.85, 0.92, 0.92, 0.92],  //Electric
		    [ 0.79, 0.86, 0.79, 0.85, 0.85, 0.85]]; //Pressure Fed

var s_fuel_data_max = [[ 8.0,  9.0,  20, 20, 3,   3,   3,   3, 320, 350, 320, 375, 375, 375, 3.8],  //Lox/Ker
		       [ 8.98, 10.0, 20, 20, 3,   3,   3,   3, 335, 370, 335, 390, 390, 390, 4.0],  //Lox/Meth
		       [ 15.0, 14.0, 25, 25, 3,   3,   3,   3, 410, 450, 410, 490, 490, 490, 6.0],  //Lox/LH2
		       [ 7.93, 8.92, 20, 20, 3,   3,   3,   3, 331, 366, 331, 385, 385, 385, 3.76], //Lox/Syn
		       [ 8.48, 9.54, 20, 20, 3,   3,   3,   3, 327, 357, 327, 383, 383, 383, 3.9],  //Lox/Prop
		       [ 7.08, 7.96, 18, 18, 3,   3,   3,   3, 293, 320, 293, 341, 341, 341, 3.5],  //HTP/Ker
		       [ 7.35, 8.27, 19, 19, 3,   3,   3,   3, 314, 343, 314, 368, 368, 368, 3.6],  //NTO/MMH
		       [ 7.39, 8.32, 19, 19, 3,   3,   3,   3, 307, 336, 307, 360, 360, 360, 3.6],  //NTO/UDMH
		       [ 13.0, 13.0, 20, 20, 1,   1,   1,   1, 270, 300, 270, 300, 300, 300, 3.7],  //Mono
		       [ 13.0, 13.0, 30, 30,10,  10,  10,  10, 283, 310, 283, 331, 331, 331, 5.0],  //N2O/C2H6
		       [ 13.0, 13.0, 20, 20, 0,   0,   0,   0, 290, 320, 290, 320, 320, 320, 3.5]]; //Solid
                                                                 
var s_fuel_data_min = [[ 5.0,   4.0,  10, 10, 1, 0.5, 0.5, 0.5, 283, 310, 283, 332, 332, 332],  //Lox/Ker 
		       [ 5.61,  4.49, 11, 11, 1, 0.5, 0.5, 0.5, 297, 327, 297, 345, 345, 345],  //Lox/Meth
		       [ 10.0,  8.0,  12, 12, 1, 0.5, 0.5, 0.5, 363, 399, 363, 434, 434, 434],  //Lox/LH2
		       [ 4.96,  3.96, 10, 10, 1, 0.5, 0.5, 0.5, 294, 323, 294, 341, 341, 341],  //Lox/Syn
		       [ 5.3,   4.24, 10, 10, 1, 0.5, 0.5, 0.5, 289, 316, 289, 339, 339, 339],  //Lox/Prop
		       [ 4.42,  3.54, 9., 9., 1, 0.5, 0.5, 0.5, 259, 283, 259, 302, 302, 302],  //HTP/Ker 
		       [ 4.6,   3.68, 9.5, 9.5, 1, 0.5, 0.5, 0.5, 277, 304, 277, 325, 325, 325],  //NTO/MMH 
		       [ 4.62,  3.7,  9.5, 9.5, 1, 0.5, 0.5, 0.5, 272, 298, 272, 319, 319, 319],  //NTO/UDMH 
		       [ 8.0,   7.0,  10, 10, 0, 0.,  0.,  0.,  239, 266, 239, 266, 266, 266],  //Mono    
		       [ 8.0,   7.0,  15, 15, 3, 3.0, 3.0, 3.0, 249, 273, 249, 292, 292, 292],  //N2O/C2H6
		       [ 8.0,   7.0,  10, 10, 0, 0.,  0.,  0.,  257, 283, 257, 283, 283, 283]]; //Solid   

var ScoreCalcWeight =  [[1.25, 0.  , 0.   , 0.   , 1.25, 0.  , 0.   , 0.   , 0.5, 0.125, 0., 0. , 0.  , 0.  ],  // 1 stage
			[1.25, 1.25, 0.   , 0.   , 1.25, 1.25, 0.   , 0.   , 0.5, 0.125, 0., 0.5, 0.  , 0.  ],  // 2 stages 
			[1.25, 1.25, 0.   , 0.575, 1.25, 1.25, 0.   , 0.575, 0.5, 0.125, 0., 0.5, 0.  , 0.25],  // 3 stages 
			[1.25, 1.25, 0.575, 0.575, 1.25, 1.25, 0.575, 0.575, 0.5, 0.125, 0., 0.5, 0.25, 0.25]]; // 4 stages

var s_rocket_count = 0;
//                              0           1                      2     3       4     5     6    7     8    9      10     11  12      13      14     15  16    17   18   19 20     21     22     23   24   25   26  27   29   31   33             35             36   37 38 39        40
var s_rocket_data =  [["CST", "Custom Rocket...",	  1.20, 1.1,   32475, 1.7,  150, 3500,  0,  775,   24.86,   0, 0.,     8.,   10.,     15, 20,    2., 2.,   1, 1,   290.5, 327,   280, 365, 320, 320, 0,0, 0,0, 0,1, 0,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "Designed Rocket - engine based"],
		     ["NS1", "NASA Saturn V",		  1.165,0.78,2909200,10.1, 8000, 3500,  0, 48600,  21.284,  0, 4.228,  5.677,  8.081, 15, 10.976,2., 2.0,  1, 2,   263.0, 304,   350, 421, 421, 421, 0,1, 2,1, 2,1, 2,1,    "Cape Canaveral",	"Moon",0, 0, 0, "Apollo lunar program launcher"],
		     ["LA5", "Launcher Nano",		  1.5,  1.1,     500,0.45,    0, 3500,  0,  1.2,   24.00,   0, 4.,    23.00, 23.00,   15, 15,    3,   3,   1, 3,   225.0, 270,   270, 315, 300, 300, 0,3, 0,3, 0,3, 0,3,    "Wallops",		"LEO", 0, 0, 0, "The smallest orbital launcher (project)"],
		     ["LA2", "Launcher Light",		  1.15, 1.1,    8500, 1.1,   30, 3500,  0,  150,    12.3,   0, 3.,     9.5,    12.,   15, 17,    2.,  2.,  1, 1,   290.5, 327,   270, 312, 305, 305, 0,0, 0,3, 5,3, 5,3,    "Wallops",		"LEO", 0, 0, 0, "One E-2 engine on the 1st stage, pres fed 2nd stage"],
		     ["LA3", "Launcher Medium",		  1.19, 0.65,  33000, 1.7,  120, 3500,  0,  505,   14.00,   0, 0.0,    8.5,    11.7,  15, 20,    2.,  1,   1, 1,   290.5, 327,   270, 320, 320, 320, 0,0, 0,3, 0,3, 0,3,    "Wallops",		"LEO", 0, 0, 0, "4 E-2 engines on the 1st stage, pres fed 2nd stage"],
		     ["LA1", "Launcher Rocket-1",	  1.19, 1.38,  32600, 1.7,  150, 3500,  0,  720,   25.00,   0, 0.0,    8.5,    9.87,  15, 20,    2.,  2,   1, 1,   290.5, 327,   280, 365, 320, 320, 0,0, 0,0, 0,3, 0,3,    "Wallops",		"LEO", 0, 0, 0, "Four E-2 engines on the 1st stage (project)"],
		     ["LA4", "Launcher XL",		  1.19, 0.88,  73540, 2.1,  550, 3500,  0, 2000,    16.0,   0, 2.,     8.0,    10.,   15, 20,    2,   2,   1, 1,   290.5, 327,   285, 365, 320, 320, 0,0, 0,0, 0,3, 0,3,    "Wallops",		"LEO", 0, 0, 0, "Nine E-2 engines on the 1st stage (project)"],
		     ["NS2", "Space Shuttle",		  1.57, 0.646,2006320,11.3,    0, 3500,  0,33600,   41.591, 0, 3.888, 14.983, 4.693,  15, 86.12, 0., 1.7,  1, 50., 242.0, 268,   366, 452, 316, 316,10,1, 2,0, 6,3, 6,3,    "Cape Canaveral",	"310   0", 0, 0, 1, "NASA The world`s first fully reusable launcher"],
		     ["NS3", "SLS Block1",		  1.422,0.623,2360130,11.3, 4000, 3500,  0,27000,   50.338, 0, 1.388, 14.997, 5.652,  15,11.603, 0., 1.7,  1, 30., 242.0, 268,   366, 452, 461, 462,10,1, 2,0, 2,1, 2,1,    "Cape Canaveral",	"Moon",0, 0, 1, "NASA Artemis program (project)"],
		     ["NS4", "SLS Block2",		  1.351,0.565,2470500,11.3, 4000, 3500,  0,42000,   52.557, 0, 5.793, 14.997, 5.652,  15, 9.86,  0., 1.7,  1, 12., 242.0, 268,   366, 452, 461, 460,10,1, 2,0, 2,1, 2,1,    "Cape Canaveral",	"Moon",0, 0, 1, "NASA Artemis program (project)"],
		     ["AR5", "Ariane-5",		  1.67, 0.413, 738300, 7.,  3500, 3500,  0,22500,   24.827, 0, 1.693, 14.342, 7.436,  15, 21.6,  0., 1.5,  1, 1,   250.0, 275,   340, 430, 324, 324,10,1, 2,1, 6,3, 6,3,    "Kuru (ESA)",	"LEO", 0, 0, 1, "ESA The most powerful European launcher"],
		     ["AR6", "Ariane-6",		  1.822,0.507, 816000, 7.,  1800, 3500,  0,11500,   25.000, 0, 5.025,  7.190, 14.11,  15, 24.39, 0., 1.5,  1, 1,   252.0, 278.5, 340, 432, 457,457.2,10,1,2,1, 6,3, 2,1,    "Kuru (ESA)",	"GTO", 0, 0, 1, "ESA The most powerful European launcher"],
		     ["VG1", "Vega",			  2.130,2.417, 137060, 3.0,  470, 3500,  0, 2000,   30.377, 8.621,0.706,7.689, 9.879, 11.14,43.18,0,   0,  0, 3,   253.0, 280,   260, 287.5,295.2,314.6,10,1,10,1,10,1,7,3, "Kuru (ESA)",	"SSO 700", 0, 0, 0, "ESA European Small-lift launcher"],
		     ["CZ2", "Long March-2F",		  1.430,1.105, 452000, 6.0 ,2000, 3500,  0, 8400,   63.717, 0,20.343, 7.805,  4.835,  15, 6.011, 2.,  2.,  1, 1.0, 260.0, 291,   260, 291, 289, 289, 7,1, 7,1, 7,1, 7,1,    "Jiuquan (China)",	"LEO", 0, 0, 1, "Chang Zheng-2F (CZ-2F) China crewed"],
		     ["CZ5", "Long March-5",		  1.264,0.549, 849300, 10. ,2000, 3500,  0, 6000,   26.245, 0, 4.239, 8.812, 11.557,  15, 19.167,2.,  2.,  1, 2.0, 300.0, 335,   317, 428, 442, 442, 0,0, 2,1, 2,1, 2,1,    "Wenchang (China)",	"Mars",0, 0, 1, "Chang Zheng-5 (CZ-5) China heavy"],
		     ["LV3", "LVM-3",			  2.114,0.901, 630000, 6.,  3000, 3500,  0, 4300,   25.079, 0, 5.238, 13.136, 7.2,    15, 15.15, 0.,  3.,  1, 3.0, 250.0, 274.5, 262, 293, 442, 442, 10,1,7,1, 2,1, 2,1,    "Shriharikota (India)","GTO", 0, 0, 1, "LVM-3 The most powerful Indian launcher"],
		     ["H34", "H3-24L",			  1.962,1.049, 574000, 7.3, 3000, 3500,  0, 8800,   47.735, 0, 5.052, 13.333, 8.163,  15, 20.69, 0.,  3.,  1, 2.0, 258.0, 283.6, 353, 425, 448, 448, 10,1,2,1, 2,1, 2,1,    "Tanegashima (Japan)","GTO", 0, 0, 1, "H3-24L The most powerful Japan launcher"],
		     ["PR1", "Proton KM",		  1.512,0.974, 677950, 6.5 ,6000, 3500,  0,23700,   32.31,  0, 7.485, 6.668,  6.536,  15, 8.247, 2.,  2.,  1, 1.0, 285.0, 316,   230, 325, 326, 326, 7,0, 7,0, 7,0, 7,0,    "Baikonur",		"LEO", 0, 0, 0, "Roskosmos Russia"],
		     ["SZ1", "Soyuz-ST",		  1.333,0.578, 305100, 6.2 ,3500, 3500,  0, 3250,   41.786, 0, 8.812, 11.557, 19.167, 15, 4.238, 2.,  2.,  1, 1.0, 263.3, 320,   255, 319, 359, 359, 0,1, 0,1, 0,1, 0,1,    "Kuru (ESA)",	"GTO", 0, 0, 1, "Roskosmos Russia"],
		     ["EN1", "Energia",			  1.521,0.718,2266500, 11.,    0, 3500,  0,100000,  34.245, 0,  0.0, 17.606, 9.357,   15, 32.58, 1.5, 1.,  1, 0,   309.0, 337,   353, 455, 324, 324, 0,0, 2,0, 7,3, 7,3,    "Baikonur",		"LEO", 0, 0, 1, "The largest Soviet rocket"],
		     ["YZ1", "Yuzhnoye Zenit-2",	  1.605,0.95,  443730, 4.15,1800, 3500,  0,13470,   20.551, 0, 0.,     7.93,  9.15,   15, 20,    2., 1.2,  1, 0.8, 309.0, 336,   300, 349, 352, 352, 0,0, 0,0, 0,0, 0,0,    "Baikonur",		"LEO", 0, 0, 0, "Yuzhnoye Ukraine"],
		     ["YZ2", "Yuzhnoye Zenit-3SL",	  1.574,0.872, 462036, 4.15,1850, 3500,  0, 6160,   23.368, 0, 3.526, 7.925, 10.359,  15, 11.122,2., 1.2,  1, 5.0, 309.5, 337.2, 300, 350, 356, 356, 0,0, 0,0, 0,0, 0,0,    "Sea Launch (Equator)","GTO", 0, 0, 0, "Yuzhnoye Ukraine"],
		     ["UL1", "ULA Delta-IV Medium",	  1.21, 0.30,  250570, 5.1, 2800, 4500,  0, 9420,    9.64,  0, 0.,    11.70, 11.79,   15, 20,    2,   1.5, 1, 0.8, 360.0, 412,   350, 462, 300, 300, 2,1, 2,1, 2,1, 2,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "United Launch Alliance"],
		     ["UL2", "ULA Atlas V 401",		  1.15, 0.29,  328770, 4.2, 2900, 4500,  0, 8910,    7.05,  0, 0.,     7.04,   10.1,  15, 20,    1.5,  1,  1, 0.8, 311.9, 338.4, 350, 450.5,300,300, 0,0, 2,0, 2,0, 2,0,    "Cape Canaveral",	"ISS", 0, 0, 0, "United Launch Alliance"],
		     ["UL3", "ULA Atlas V 541",		  1.50, 1.141, 514270, 5.4, 4650, 3500,  0, 8200,   64.019, 0, 4.439, 7.847, 7.281,   15, 8.892,  0.,  1., 1, 0.5, 245.0, 275, 311.9, 338.4,450,450, 10,1,0,0, 2,0, 2,0,    "Cape Canaveral",	"GTO", 0, 0, 1, "ULA - CCB+SEC/DEC+4SRB+5mSPLF"],
		     ["UL4", "ULA Vulcan VC6L",		  1.787,0.826, 839789, 5.4, 6000, 3500,  0,27200,   62.581, 0, 2.783, 8.632, 8.000,   15, 11.0,   0.,  2., 1, 2,   255.,  280.3, 310, 335, 324,453.8,10,1,1,0, 6,3, 2,1,    "Cape Canaveral",	"LEO", 0, 0, 1, "ULA with BE-4"],
		     ["NG1", "Orbital (NG now) Antares 100",1.19, 1.53, 274735, 3.9,  970, 4500,  0, 4600,    5.10, 0,  0.,     7.17,   8.69, 15, 20,    3,   0,   1, 0.8, 297.,  331.,  270, 301, 300, 300, 0,0,10,1,10,1,10,1,    "Wallops",		"LEO", 0, 0, 0, "Orbital Sciences Corporation (Aj-26)"],
		     ["NG2", "Northrop Grumman Antares 230",1.32, 1.44, 287000, 3.9,  970, 4500,  0, 6500,    9.103,0,  0.,   7.845,  7.985,  15, 20,    2.5, 0,   1, 0.8, 311.9, 339.2, 270, 304, 300, 300, 0,0,10,1,10,1,10,1,    "Wallops",		"LEO", 0, 0, 0, "Northrop Grumman (RD-181)"],
		     ["NG3", "Northrop Grumman Pegasus",  3.17, 2.59,  18300, 1.27, 150, 3500,  0,  450,   23.3,    0,4.87,  13.34,  10.39,   15, 13.48, 0,   0,   1, 0,   270.0, 295,   260, 289, 287, 287,10,1,10,1,10,1,10,1,    "Vandenberg",	"LEO", 1, 0, 0, "Northrop Grumman Air Launch"],
		     ["SX1", "SpaceX Falcon 1",		  1.179,0.598, 29400, 1.7,  145, 3500,  0,  420,   15.341,  0,0.00,   6.5,    9.0,    15, 20.00, 3,   2,   1, 1,   264.0, 300,   260, 317, 320, 320, 0,1, 0,3, 0,3, 0,3,    "Omelek Island",	"LEO", 0, 0, 0, "First SpaceX Launcher"],
		     ["SX2", "SpaceX Falcon 9 V1.0",	  1.22, 0.75, 308000,3.66, 1900, 3500,  0, 8500,   16.56,   0,0.00,   6.74,   5.96,   15, 20.00, 2.0, 1.0, 1, 1,   266.0, 304,   260, 336, 320, 320, 0,1, 0,1, 0,1, 0,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "SpaceX"],
		     ["SX3", "SpaceX Falcon 9 V1.1",	  1.19, 0.837,490600, 5.2, 1900, 3500,  0, 13150,  14.656,  0,0.00,   5.493,  5.425,  15, 20.00, 3.0, 3.0, 1, 1,   282.0, 311,   260, 340, 320, 320, 0,1, 0,1, 0,1, 0,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "SpaceX"],
		     ["SX4", "SpaceX Falcon 9 FT",	  1.41, 0.70, 524554, 5.2, 1700, 3500,  0, 22800,  20.93,   0,0.00,   5.14,   4.04,   15, 20.00, 1.0, 1.0, 1, 1,   286.0, 321,   280, 348, 320, 320, 0,1, 0,1, 0,1, 0,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "Advanced SpaceX Launcher"],
		     ["SX5", "SpaceX Falcon Heavy",	  1.545,1.102,1437000,7.7, 1700, 3500,  0, 63800,  39.722,  0,8.038,  5.126,  4.876,  15, 3.463, 1.0, 1.0, 1, 1,   286.0, 321,   286, 321, 320, 348, 0,1, 0,1, 0,1, 0,1,    "Cape Canaveral",	"LEO", 0, 0, 1, "Heavy SpaceX Launcher"],
		     ["SX6", "SpaceX Starship",		  1.434,0.549, 5226000, 9.0,  0, 3500,  0,150000,  25.238,  0, 0.00,  13.0,   9.0,    15, 10.,   1.5, 1.5, 1, 1,   327.0, 356,   280, 380, 380, 380, 1,0, 1,0, 1,0, 1,0,    "SpaceX Boca Chica","LEO", 0, 0, 0, "SpaceX "],
		     ["RL1", "Rocket Lab Electron",	  1.32, 0.93,  12355, 1.2,   44, 3500, 50,   150,  20.16,   0,1.83,   9.31,  10.42,   15, 18.00, 2.,  2.,  1, 1,   256.0, 303,   250, 333, 250, 250, 0,2, 0,2, 8,3, 8,3,    "Rocket Lab LC-1",	"SSO", 0, 0, 0, "Rocket Lab"],
		     ["RL2", "Rocket Lab Electron improved",1.32, 0.93,  12580, 1.2,   44, 3500, 50,   200,  20.16, 0,  1.83,   9.31,  10.42, 15, 18.00, 2.,  2.,  1, 1,   263.0, 311,   250, 343, 280, 280, 0,2, 0,2, 8,3, 8,3,    "Rocket Lab LC-1",	"SSO", 0, 0, 0, "Rocket Lab 2020 improved version"],
		     ["RL3", "Rocket Lab Neutron (Electric Cycle)",1.32, 0.93, 740000, 4.5,  1100,3500,2000, 8000,  26, 0., 2.50,  9.0, 10.0, 15, 15.0, 1.5, 1.5,  1, 1,   263.0, 311,   250, 343, 305, 305, 0,2, 0,2, 5,3, 5,3,    "Wallops",		"SSO", 0, 1, 0, "Rocket Lab new rocket (Electric cycle engines)"],
		     ["RL4", "Rocket Lab Neutron (Archimedes)",	  1.2,  0.90,  480000, 7.0,     0,3500,   0, 8000,  25, 0.,  0.0,  7.0,  6.5, 15, 15.0, 2.0, 1.5,  1, 1,   283.0, 320,   280, 363, 305, 305, 1,1, 1,1, 5,3, 5,3,    "Wallops",		"LEO", 0, 1, 0, "Rocket Lab new rocket (Open cycle engines)"],
		     ["VO1", "Virgin Orbit Launcher One",  1.31, 0.65,  25500, 1.8,  100, 3500,  0,   300,   12.0,  0, 0.00,   9.50,   9.00,  15, 20.00, 3,   3,   1, 1,   290.0, 308,   280, 328, 300, 300, 0,1, 0,1, 0,1, 0,1,    "Mojave",		"SSO", 1, 0, 0, "Virgin Orbit"],
		     ["KR1", "KSLV-II",			  1.312, 1.46, 200000,  3.5, 700, 3500,  0, 2600,  25.886,  0,4.283,   10.0,  10.0,   15, 25.88, 3., 3.0,  1, 3.,  262.0, 298.6, 260,315.4,325.1,325,0,1, 0,1, 0,1, 0,1,    "Naro (South Korea)",	"LEO", 0, 0, 0, "KARI Nuri rocket"],
		     ["FR1", "Firefly Alpha",		  1.243, 0.79, 53000, 2.21,  330, 3500,  0,  1000,  14.905, 0, 0.00, 6.42,   11.508,  15, 20.00, 2,    1,  1, 1,   265.0, 295.6, 270, 322, 300, 300, 0,1, 0,1, 0,1, 0,1,    "Vandenberg",	"LEO", 0, 0, 0, "Firefly"],
		     ["BO1", "Blue Origin New Glenn 2st",  1.22, 0.91, 1380000, 7.0, 4000, 3500,  0, 45000,  19.564,0,  0.00,   9.91,  7.037, 15, 10.909,1,   1,   1, 1,   310.0, 335,   260, 358, 440, 440, 1,0, 1,0, 1,0, 1,0,    "Cape Canaveral",	"LEO", 0, 0, 0, "Blue Origin 2-Stages (Superceded) (project)"],
		     ["BO2", "Blue Origin New Glenn 3st",  1.20, 0.83, 1435000, 7.0, 4000, 3500,  0, 20000,  22.647,0,  5.761,  9.91,  7.037, 15, 10.909,1,   1,   1, 1,   310.0, 335,   260, 358, 440, 440, 1,0, 1,0, 2,1, 2,1,    "Cape Canaveral",	"Mars",0, 0, 0, "Blue Origin 3-Stages (Superceded) (project)"],
		     ["RT1", "Relativity Terran 1 ",	  1.170,  0.909,  69000, 2.7,  400, 3500,  0, 1480,  17.50, 0, 0.00,   9.00,   9.00,  15, 20.00, 3,   2,   1, 1,   267.0, 310,   300, 360, 300, 300, 1,1, 1,1, 1,1, 1,1,    "Cape Canaveral",	"LEO", 0, 0, 0, "Relativity (project)"],
		     ["AS3", "Astra Rocket-3",		  1.4,  0.53,  10000, 1.32, 100, 3500,   0,   100,   4.0,   0, 0.00, 10.00,   9.00,   15, 20.00, 2.5,  2,  1, 1,   234.0, 284,   250, 315, 300, 300, 0,2, 0,3, 5,3, 5,3,    "Kodiak",		"LEO", 0, 0, 0, "Astra (project)"],
		     ["AS4", "Astra Rocket-4",		  1.203,0.696, 29500, 1.8, 150, 3500,   0,   550,   12.0,   0, 0.00,  9.00,   8.00,   15, 20.00, 2.0,  1,  1, 1,   265.0, 305,   260, 335, 300, 300, 0,1, 0,1, 5,3, 5,3,    "Kodiak",		"LEO", 0, 0, 0, "Astra (project)"],
		     ["AB1", "ABL RS1 (In-house engines)", 1.2, 0.769, 40000, 1.83,  450, 3500,  0,  1350,  16.,    0, 0.00,   7.00,  6.0,    15, 20.0,  2.,   1,  1, 1,   265.0, 295.6, 270, 322, 300, 300, 0,1, 0,1, 0,1, 0,1,    "Kodiak",		"LEO", 0, 0, 0, "ABL Space Systems (project)"],
		     ["AB2", "ABL RS1 (Ursa engines)",	  1.2,  0.69,  25260, 1.83,  300, 3500,  0,   900,  11.75,  0, 0.00,   4.00,   4.00,  15, 20.00, 1,  .5,   1, 1,   262.0, 308,   260, 345, 300, 300, 0,0, 0,0, 0,0, 0,0,    "Kodiak",		"LEO", 0, 0, 0, "with URSA Major Tech engines (project)"],
		     ["IS1", "Isar Spectrum",	          1.212,0.941, 55500, 2.0,   300, 3500,  0,   1000, 16.0,   0,  0.0,	8.,	7.5,  15, 20.0,  2.,  2.,  1, 3.,  256.0, 303,   250, 333, 315, 315, 4,1, 4,1, 4,1, 4,1,    "Andoya Norway",	"LEO", 0, 0, 0, "Isar Aerospace"],
		     ["SK1", "Skyrora XL ",		  1.24, 0.9,   55300, 2.2,   215, 4000,  0,   315,  14.7,   0,  1.0,    11.0,   11.0, 15, 27.00, 3.,  3.,  1, 3.,  250.0, 285,   250, 306, 305, 305, 5,1, 5,1, 5,3, 5,3,    "Stornoway (UK)",	"SSO", 0, 0, 0, "Skyrora United Kingdom (project)"],
		     ["TI1", "TiSpace Hapith V",          1.435, 0.834, 43980, 2.2,   100, 3500,  0,   390, 20.418, 0, 2.910,  15.714, 15.584,15, 18.0,  5.,  5.,  1, 4.,  270.0, 305,   250, 315, 315, 315,10,1,10,1,10,1,10,1,    "TiSpace Space Port","LEO", 0, 0, 0, "TiSPACE (project)"],
		     ["PH2", "Phantom Laguna",		  1.221, 0.419, 54000, 2.0,   300, 3500,  0,  1200,  10.00, 0,  0.00,    8.00,  7.00, 15, 20.0,  2.,  1.,  1, 1.,  262.0, 308,   250, 345, 300, 300, 0,0, 0,0, 0,0, 0,0,    "Cape Canaveral",	"LEO", 0, 0, 0, "Phantom (project)"],
		     ["PL1", "Miura 5",		  	  1.206, 0.720, 43200, 1.8,   250, 3500,  0,  900,   14.00, 0,  0.0,     8.00,  7.00, 15, 20.0,  2.,  1.,  1, 1.,  265.0, 296,   250, 322, 320, 320, 0,1, 0,1, 0,3, 0,3,    "Kuru (ESA)",	"LEO", 0, 0, 0, "PLD Space (project)"],
		     ["NEW", " ",		  	  1.206, 0.720, 43200, 1.8,   250, 3500,  0,  900,   14.00, 0,  0.0,     8.00,  7.00, 15, 20.0,  2.,  1.,  1, 1.,  265.0, 296,   250, 322, 320, 320, 0,1, 0,1, 0,3, 0,3,    "Cape Canaveral",	"LEO", 0, 0, 0, " "],
			 ];
var s_engine_count = 54;
var s_engine_data = [["Launcher E-2",		10000.,	290.5, 327., 0, 0, 9,   133,"T","G","Wallops",	"Launcher 1st stage"],
		     ["Launcher E-2 vac",	12600.,	270.0, 365., 0, 0, 1,   168,"T","G","Wallops",	"Launcher 2nd stage"],				
		     ["Ursa Hadley",		2690.,	260.0, 305., 0, 0, 9,    36,"T","G","Cape Canaveral","URSA Major ORSC engine for 1st stage"],
		     ["Ursa Hadley vac",	2900.,	240.0, 345., 0, 0, 1,    39,"T","G","Cape Canaveral","URSA Major ORSC engine for 2nd stage"],
		     ["Ursa Ripley",		22600., 262.0, 308., 0, 0, 3,   301,"T","G","Cape Canaveral","URSA Major ORSC engine for 1st stage"],				
		     ["Ursa Hadley vac",	2900.,	240.0, 345., 0, 0, 1,    39,"T","G","Cape Canaveral","URSA Major ORSC engine for 2nd stage"],
		     ["RL Rutherford",		1800.,	256.0, 303., 0, 2, 9,    24,"T","G","Rocket Lab LC-1","RocketLab Electron 1st stage"],				
		     ["RL Rutherford vac", 	2500.,	236.0, 333., 0, 2, 1,    33,"T","G","Rocket Lab LC-1","Rocketlab Electron 2nd stage"],
		     ["Virgin Newton III",	24581.,	212.0, 308., 0, 1, 1,   448,"T","A","Mojave",	"Virgin Orbit Launcherone 1st stage"],				
		     ["Virgin Newton IV", 	2200.,	270.0, 328., 0, 1, 1,    29,"T","A","Mojave",	"Virgin Orbit Launcherone 2nd stage"],				
		     ["Firefly Reaver",		16900.,	265.0, 295.6,0, 1, 4,   225,"T","G","Vandenberg",	"Firefly Alpha 1st stage"],				
		     ["Firefly Lightning",	7100.,  245.0, 322., 0, 1, 1,    95,"T","G","Vandenberg",	"Firefly Alpha 2nd stage"],				
		     ["Relativity Aeon-1",	9200.,	267.0, 310., 1, 1, 9,   123,"T","G","Cape Canaveral","Relativity Space Terran-1 1st stage"],				
		     ["Relativity Aeon-1 vac",	12600.,	247.0, 360., 1, 1, 1,   168,"T","G","Cape Canaveral","Relativity Space Terran-1 2nd stage"],
		     ["Relativity Aeon-R",	122000, 267.0, 310., 1, 1, 13,  123,"T","G","Cape Canaveral","Relativity Space Terran-R 1st stage"],				
		     ["Relativity Aeon-Rvac",	146500, 247.0, 360., 1, 1, 1,   168,"T","G","Cape Canaveral","Relativity Space Terran-R 2nd stage"],
		     ["RFA Helix",		8010.,	282.0, 327., 0, 0, 9,   107,"T","G","SaxaVord (UK)","RFA Aerospace ONE 1st stage"],				
		     ["RFA Helix vac",		10000.,	262.0, 352., 0, 0, 1,   133,"T","G","SaxaVord (UK)","RFA Aerospace ONE 2nd stage"],	
		     ["Isar Aqula",		7650.,	256.0, 303., 4, 1, 9,   102,"T","G","Andoya Norway","Isar Aerospace Spectrum 1st stage"],				
		     ["Isar Aqula vac",		9580.,	236.0, 333., 4, 1, 1,   128,"T","G","Andoya Norway","Isar Aerospace Spectrum 2nd stage"],	
		     ["SpaceX Merlin 1Ci",	35500.,	264.0, 300., 0, 1, 1,   473,"T","G","Omelek Island","SpaceX Falcone-1 1st stage"],				
		     ["SpaceX Kerstel 2",	3100.,	230.0, 317., 0, 3, 1,    41,"T","G","Omelek Island","SpaceX Falcone-1 2nd stage"],				
		     ["SpaceX Merlin 1C",	43100.,	267.0, 305., 0, 1, 9,   575,"T","G","Cape Canaveral","SpaceX Falcone-9 1st stage"],				
		     ["SpaceX Merlin 1Cv",	45400.,	260.0, 336., 0, 1, 1,   605,"T","G","Cape Canaveral","SpaceX Falcone-9 2nd stage"],				
		     ["SpaceX Merlin 1D",	66700.,	282.0, 311., 0, 1, 9,   889,"T","G","Cape Canaveral","SpaceX Falcone-9 v1.1 1st stage"],				
		     ["SpaceX Merlin 1Dv",	73000.,	260.0, 340., 0, 1, 1,   973,"T","G","Cape Canaveral","SpaceX Falcone-9 v1.1 2nd stage"],				
		     ["SpaceX Merlin 1D+",	86200.,	282.0, 311., 0, 1, 9,  1149,"T","G","Cape Canaveral","SpaceX Falcone-9FT 1st stage"],				
		     ["SpaceX Merlin 1D+v",	95300.,	262.0, 348., 0, 1, 1,  1271,"T","G","Cape Canaveral","SpaceX Falcone-9FT 2nd stage"],	
		     ["SpaceX Raptor",		235000,	327.0, 356., 1, 0, 33, 3133,"T","G","SpaceX Boca Chica","SpaceX Starship 1st stage"],				
		     ["SpaceX Raptor vac",	275000,	307.0, 380., 1, 0, 3,  3667,"T","G","SpaceX Boca Chica","SpaceX Starship 2nd stage"],				
		     ["Energomash RD-170",	740000,	309.5, 337.2,0, 0, 1,  9867,"T","G","Baikonur",	"Yuzhnoye Zenit 1st stage"],				
		     ["Energomash RD-120",	93000.,	289.0, 349., 0, 0, 1,  1240,"T","G","Baikonur",	"Yuzhnoye Zenit 2nd stage"],				
		     ["Energomash RD-180",	390000,	311.9, 338.4,0, 0, 1,  5200,"T","G","Cape Canaveral","United Launch Alliance Atlas V 1st stage"],
		     ["AR RL-10C",		10400.,	350.0, 450., 2, 0, 1,   139,"T","G","Cape Canaveral","United Launch Alliance Atlas V 2nd stage"],
		     ["Energomash RD-181",	196000,	311.9, 339.2,0, 0, 2,  2613,"T","G","Wallops",	"Northrop Grumman Antares 230 1st stage"],				
		     ["NG Castor 30XL",		48300.,	270.0, 304.,10, 3, 1,   644,"T","G","Wallops",	"Northrop Grumman Antares 230 2nd stage"],				
		     ["AR F-1",			690000,	263.0, 304., 0, 1, 5,  9200,"T","G","Cape Canaveral","Saturn V 1st stage"],				
		     ["AR J-2",			104000,	330.0, 421., 2, 1, 5,  1387,"T","G","Cape Canaveral","Saturn V 2nd stage"],				
		     ["SRB",			1320000,242.0, 268.,10, 3, 2,  1760,"P","P","Cape Canaveral","Space Shuttle Solid Rocket Booster"],				
		     ["AR RS-25",		190000,	366.0, 452.3,2, 0, 4,  2533,"T","G","Cape Canaveral","Space Shuttle Main Engine"],				
		     ["P120C",			350000, 252.0, 278.5,10,3, 4,  4667,"P","P","Kuru (ESA)",	"Ariane 6 Solid Rocket Booster"],				
		     ["Vulcain 2.1",		138000,	340.0, 432., 2, 1, 1,  1840,"T","G","Kuru (ESA)",	"Safran (France)"],	 			
		     ["AR RS-25.",		190000,	366.0, 452.3,2, 0, 1,  2533,"T","G","Cape Canaveral","Space Shuttle Main Engine"],				
		     ["AR RL-10",		11250.,	355.0, 465.5,2, 0, 1,   150,"T","G","Cape Canaveral","Centaur upper stage"],				
		     ["AR RS-68A",		320000,	360.0, 412., 2, 1, 1, 42667,"T","G","Cape Canaveral","United Launch Alliance Delta IV 1st stage"],				
		     ["AR RL-10B",		11300.,	355.0, 462., 2, 0, 1,   151,"T","G","Cape Canaveral","United Launch Alliance Delta IV 2nd stage"],				
		     ["AR AJ-26",		166000,	297.0, 331., 0, 0, 2,  2213,"T","G","Wallops",	"Orbital (NG now) Antares 100 1st stage"],				
		     ["NG Castor 30A",		30000.,	270.0, 301., 10,3, 1,   400,"T","G","Wallops",	"Orbital (NG now) Antares 100 2nd stage"],				
		     ["Blue Origin BE-4",	250000, 310.0, 335., 1, 0, 7,  3333,"T","G","Cape Canaveral","Blue Origin New Glenn 1st stage"],				
		     ["BLue Origin BE-4U",	290000,	290.0, 358., 1, 0, 1,  3867,"T","G","Cape Canaveral","Blue Origin New Glenn 2nd stage"],				
		     ["120t ORSC Engine",	123000., 303., 334., 0, 0, 3,  1640,"T","G","Cape Canaveral","Big Rocket 1st stage"],				
		     ["Launcher E-2vac",	12600.,	 270., 365., 0, 0, 3,   168,"T","G","Cape Canaveral","Big Rocket 2nd stage"],
		     ["Stoke Space 1st",	45000., 317.0, 345., 1, 0, 7,   600,"T","G","Cape Canaveral","Stoke Space NOVA 1st stage"],				
		     ["Stoke Space 2nd",	11300.,	330.0, 425., 2, 1, 1,   151,"T","G","Cape Canaveral","Stoke Space NOVA 2nd stage"],				
			];

function closeModel(){
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}

function openAbout() {
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	var popupContent1 = '<p>&emsp;This software is not intended to perform space launcher calculations because the method used is an approximation and is not accurate enough. It is only intended to assess the impact of the main rocket factors on the payload mass, and the resulting accuracy is about 10%. The tool allows you to simulate either a serial or parallel/tandem staging ("Booster stage" option), however, in the second case the calculation accuracy will be lower. With a parallel staging, the thrust-to-weight ratio for the first stage determined based on the thrust of the engines of both stages, and for the second stage the thrust of the engines and the total mass of the second and subsequent stages at the takeoff moment. The Calculator also does not take into account the possibility of optimizing due to multiple burn maneuvers, which is especially effective for GTO and GEO orbits. In addition it is assumed that the rocket design is conventional, meaning the body must be cylindrical with an aspect ratio of 20 to 30, the thrust-to-weight ratio of the first stage should be from 1.2 to 1.6, the mass ratio of the first to second stage should be from 1:0.05 to 1:0.25, and the fairing should jettison shortly after the second stage ignition upon reaching a predetermined velocity of 3500 m/s, which in general corresponds to a flight altitude of more than 95 km. To achieve high orbits, the upper stage engine must be capable of multiple restarts . When calculating possible orbits, it should also be taken into account that some space ports impose certain restrictions on the permissible inclinations of the orbits. This is usually due to an active trajectory leg passing over a populated area. For example, from the Canaveral spaceport, it is forbidden to to inject directly into SSO.</p>';
	var popupContent2 = '<p style="color:red">&emsp; All parameters in the Launcher Calculator have hints that appear when hovering over. <a style="color:black"> Most of the answers to your questions can be found here. The main rocket factors are presented as a percentage of the stage or rocket mass. Only the rocket lift off mass and payload are presented as absolute values in kilograms. This approach is used because it is the relative ratios that are used to calculate the rocket effectiveness. This approach also allows us to better understand the basic principles of rocket design. However, if you want to evaluate an existing rocket, then most likely you know its absolute weights of stages&#039;, propellants, engine thrust, etc. Then these values can be entered in the "Output" section once the "Advanced" button is pressed. Afterwards these values will be converted into relative values automatically. Values can only be entered in cells marked with a border. The velocity losses are calculated according to the Y. Lobanovsky method described in the article: "Delta velocity prediction for injection into Low Earth Orbit." The influence of the second stage thrust-to-weight ratio over losses is taken into account according to the J.Schilling method.</p>'; 
	var popupContent3 = '<p>&emsp;The reuse of the first stage is calculated for the most energy-intensive case with returning to the starting point. In case of choosing reusability, the propellant reserve on the first stage is increased by an amount sufficient for this stage (excluding the mass of the second stage) to reach a delta speed of 2200 m/s. This delta speed, according to the author&#039;s assessment, is sufficient for the first stage returning and landing according to the SpaceX&#039;s method. The Air Launch effect is calculated taking into account the increase in the altitude and speed of the rocket at the moment of launch, as well as the increase in engine thrust and specific impulse at the launch altitude.</p>'; 
	var popupContent4 = '<p>&emsp;The Rocket Calculator provides two options - calculation based on an existing launcher, which allows you to evaluate its level of performance, or the engines-based calculation, which allows you to evaluate the performance of a hypothetical space launcher that can be created by applying a certain number of existing engines. For the second calculation option, select "Custom Rocket" in the "Select Rocket" menu. To compare the effectiveness of different fuels and cycles, it is convenient to use the averaged factors mode, "Set averages." The Calculator has reasonable restrictions on the various factors of the rocket. If you want to go beyond these limits, you can remove this restriction by deselecting "Limit to reasonable." To display more information press "Advanced" button.</p>';
	var popupContent5 = '<p>&emsp;All of the rockets features are obtained from the Internet. They are averaged and may differ from the specific case of launch. Since many of the specifications of the majority of projected launchers have not been published, they are assumed by the author based on his experience to ensure the declared payload. Some of these specifications may turn out to be practically impossible, since most companies use very aggressive predictions. </p>';
	var popupContent6 = 'Igor Nikishchenko <a href="https://www.linkedin.com/in/igor-nikishchenko-24b19b48">Linkedin</a>'
	var modelContent = popupContent1 + popupContent2 + popupContent3 + popupContent4 + popupContent5 + popupContent6;
	var strModel = document.getElementById("popupContent");
	strModel.innerHTML = modelContent;
	var modelTitle = document.getElementById("modelTitle");
	modelTitle.innerHTML = "Background and usage";
}

function openLicense() {
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	var popupContent1 = '<p>MIT License</p><p>Copyright (c) 2020 Launcher Inc.</p>';
	var popupContent2 = '<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>';
	var popupContent3 = '<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>';
	var popupContent4 = '<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, AUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>';
	var modelContent = popupContent1 + popupContent2 + popupContent3 + popupContent4;
	var strModel = document.getElementById("popupContent");
	strModel.innerHTML = modelContent;
	var modelTitle = document.getElementById("modelTitle");
	modelTitle.innerHTML = "MIT License";
}

function Rad2Deg(radians)
{
	return radians * (180./Math.PI);
}

function Deg2Rad(degrees)
{
	return degrees * (Math.PI/180.);
}

function Sec2Day(a)
{
y=Math.floor(a/31558150);
a-=31558150*y;
d=Math.floor(a/86400);
a-=86400*d;
h=Math.floor(a/3600);
a-=3600*h;
m=Math.floor(a/60);if(m<10){m='0'+m};
s=(a-60*m).toFixed(0);if(s<10){s='0'+s};
if (d == 0 && y == 0)
  {return h+":"+m+":"+s+" s";}
else
  if (y == 0)
    {return d+"d "+h+":"+m+":"+s+" s";}
  else
    if (y < 10)
      {return y+"y "+d+"d "+h+":"+m+":"+s+" s";}
    else 
      {return y+"y "+d+"d "+h+"h";}
}

function CalculateTargetVelocity()
{
	var Starting_point_Altitude = parseFloat(elStarting_point_Altitude.value);
	var Additional_Speed = parseFloat(elAdditional_Speed.value);
	var Orbit_Perigee = parseFloat(elOrbit_Perigee.value);
	var Orbit_Apogee = parseFloat(elOrbit_Apogee.value);
	if (Orbit_Apogee == 0.) Orbit_Apogee = Orbit_Perigee;
	var Spaceport_latitude = parseFloat(elSpaceport_latitude.value);
	var Orbit_Inclination;
	if (elOrbit.selectedIndex == 2)
	{
//			Orbit_Inclination = 95.7+.00296*Orbit_Perigee+7.97e-7*Orbit_Perigee*Orbit_Perigee;
		var Eccentr=1.-((6371.+Orbit_Perigee)/((6371.+Orbit_Perigee+6371.+Orbit_Apogee)/2.))
		Orbit_Inclination = Rad2Deg(Math.acos(-4.755411e-15*Math.pow(6371.+Orbit_Perigee,3.5)*Math.pow(1.-Eccentr*Eccentr,2)));
		elOrbit_Inclination.value = Orbit_Inclination.toFixed(2);
	} 
	else
	{
		if (Math.abs(elOrbit_Inclination.value) < Math.abs(Spaceport_latitude))elOrbit_Inclination.value = Spaceport_latitude;
		Orbit_Inclination = parseFloat(elOrbit_Inclination.value);
	}

	var Extra_speed_for_flight_to_the_planets = parseFloat(elExtra_speed_for_flight_to_the_planets.value);
	var Intermediate_angle = Rad2Deg(Math.asin(Math.cos(Deg2Rad(Orbit_Inclination))/Math.cos(Deg2Rad(Spaceport_latitude))));
	elIntermediate_angle.textContent = Intermediate_angle.toFixed(2);
	
	var earth_radius = 6371.;
	var gravity_const = 398600500000.;
	
	var Launch_point_speed = 465.*Math.cos(Deg2Rad(Spaceport_latitude));
	elLaunch_point_speed.textContent = Launch_point_speed.toFixed(1);
	
	var Starting_point_Altitude_orbital_velocity = Math.sqrt(gravity_const/(earth_radius+Starting_point_Altitude));
	elStarting_point_Altitude_orbital_velocity.textContent = Starting_point_Altitude_orbital_velocity.toFixed(1);
	
	var Absolute_orbital_velocity = Math.sqrt(gravity_const/(earth_radius+Orbit_Perigee));
	elAbsolute_orbital_velocity.textContent = Absolute_orbital_velocity.toFixed(1);
	
	var Perigee_velocity = 1000.*Math.sqrt(398600.5*(2./(6371.+Orbit_Perigee)-1/(6371. +(Orbit_Perigee+Orbit_Apogee)/2.)));
	elPerigee_velocity.textContent = Perigee_velocity.toFixed(1);

	var Apogee_velocity = 1000.*Math.sqrt(398600.5*(2./(6371.+Orbit_Apogee)-1/(6371. +(Orbit_Perigee+Orbit_Apogee)/2.)));
	elApogee_velocity.textContent = Apogee_velocity.toFixed(1);

	var Orbital_period = 2.*Math.PI/Math.sqrt(398600.5)*Math.pow(6371. +(Orbit_Perigee+Orbit_Apogee)/2., 3./2.);
	elOrbital_period.textContent = Sec2Day(Orbital_period);

	if (elOrbit.selectedIndex == 5) var Vsp_for_inclination_change = -3.215E-3*Math.pow(Orbit_Inclination,3) + .5134*Math.pow(Orbit_Inclination,2) + .571*Orbit_Inclination;
	else
					Vsp_for_inclination_change = 0;
	elVsp_for_inclination_change.textContent = Vsp_for_inclination_change.toFixed(1);
	
	var tmp_velocity = Math.sqrt(Launch_point_speed*Launch_point_speed + Absolute_orbital_velocity*Absolute_orbital_velocity
									-2.*Launch_point_speed*Absolute_orbital_velocity*Math.sin(Deg2Rad(Intermediate_angle)));

	if (465.*Math.cos(Deg2Rad(Orbit_Inclination)) < Absolute_orbital_velocity)  var Orbital_velocity = tmp_velocity;
	else										Orbital_velocity = -tmp_velocity; 

//		tmp_velocity = Math.sqrt(Launch_point_speed*Launch_point_speed + Absolute_orbital_velocity*Absolute_orbital_velocity
//										-2.*Launch_point_speed*Absolute_orbital_velocity*Math.sin(Deg2Rad(Intermediate_angle)+1e-7));

	if(465.*Math.cos(Deg2Rad(Orbit_Inclination)) < Absolute_orbital_velocity) var Orbital_velocity_ = tmp_velocity;
	else									      Orbital_velocity_ = -tmp_velocity;					

	elOrbital_velocity.textContent = Orbital_velocity.toFixed(1);
	
	var Orbital_velocity_increment_due_to_the_Earth_rotation = Absolute_orbital_velocity - Orbital_velocity;
	elOrbital_velocity_increment_due_to_the_Earth_rotation.textContent = Orbital_velocity_increment_due_to_the_Earth_rotation.toFixed(1);
	
	var Launch_azimuth = Rad2Deg(Math.acos(Absolute_orbital_velocity/Orbital_velocity*Math.cos(Deg2Rad(Intermediate_angle))));
	var Launch_azimuth_ = Rad2Deg(Math.acos(Absolute_orbital_velocity/Orbital_velocity_*Math.cos(Deg2Rad(Intermediate_angle)+1e-7)));
	if(Launch_azimuth > Launch_azimuth_) Launch_azimuth = -Launch_azimuth;
	elLaunch_azimuth.textContent = Launch_azimuth.toFixed(2);

//		Absolute_orbital_velocity0 = Absolute_orbital_velocity;
//		if (Absolute_orbital_velocity0 < 7788.5)Absolute_orbital_velocity0 = 7788.5;
//		var Vsp_for_circular_orbit0 = Starting_point_Altitude_orbital_velocity
//				+Starting_point_Altitude_orbital_velocity*(Starting_point_Altitude_orbital_velocity/Math.sqrt(.5*(Starting_point_Altitude_orbital_velocity*Starting_point_Altitude_orbital_velocity+Absolute_orbital_velocity0*Absolute_orbital_velocity0))-1.)
//				+Absolute_orbital_velocity0*(1.-Absolute_orbital_velocity0/Math.sqrt(.5*(Starting_point_Altitude_orbital_velocity*Starting_point_Altitude_orbital_velocity+Absolute_orbital_velocity0*Absolute_orbital_velocity0)));
//		Irremovable_Gravity_Losses = - 242.5 + Vsp_for_circular_orbit0 - Absolute_orbital_velocity0;

	var Vsp_for_circular_orbit = Starting_point_Altitude_orbital_velocity
			+Starting_point_Altitude_orbital_velocity*(Starting_point_Altitude_orbital_velocity/Math.sqrt(.5*(Starting_point_Altitude_orbital_velocity*Starting_point_Altitude_orbital_velocity+Absolute_orbital_velocity*Absolute_orbital_velocity))-1.)
			+Absolute_orbital_velocity*(1.-Absolute_orbital_velocity/Math.sqrt(.5*(Starting_point_Altitude_orbital_velocity*Starting_point_Altitude_orbital_velocity+Absolute_orbital_velocity*Absolute_orbital_velocity)))
			-Orbital_velocity_increment_due_to_the_Earth_rotation -Additional_Speed +Vsp_for_inclination_change;
	elVsp_for_circular_orbit.textContent = Vsp_for_circular_orbit.toFixed(1);
	                   
	if (Orbit_Apogee == 0)  Vsp_for_target_orbit = Vsp_for_circular_orbit +Extra_speed_for_flight_to_the_planets;
	else			Vsp_for_target_orbit = Vsp_for_circular_orbit +Extra_speed_for_flight_to_the_planets
							  +Absolute_orbital_velocity*(Absolute_orbital_velocity/Math.sqrt(.5*(Math.pow(Absolute_orbital_velocity,2)+gravity_const/(earth_radius+Orbit_Apogee)))-1.);
	elVsp_for_target_orbit.textContent = Vsp_for_target_orbit.toFixed(1);

	var Injection_velocity = Vsp_for_target_orbit+Orbital_velocity_increment_due_to_the_Earth_rotation;
	elInjection_velocity.textContent = Injection_velocity.toFixed(1);
	
	var Vsp_for_LEO = 8031.-Orbital_velocity_increment_due_to_the_Earth_rotation-Additional_Speed;
	elVsp_for_LEO.textContent = Vsp_for_LEO.toFixed(1);
}

function CalculateTargetMass()
{
	var Assumed_payload_mass = parseFloat(elAssumed_payload_mass.value);
	var Vsp_for_LEO = parseFloat(elVsp_for_LEO.textContent);
	var Fairing_jettison_velocity = parseFloat(elFairing_jettison_velocity.value);
	var Fairing_mass = parseFloat(elFairing_mass.value);
	var Rocket_Mass = parseFloat(elRocket_Mass.value);
	var Max_midsection_D = parseFloat(elMax_midsection_D.value);
	var Starting_point_Altitude = parseFloat(elStarting_point_Altitude.value);
	var Thrust_to_weight_ratio = parseFloat(elThrust_to_weight_ratio.value);
	var Thrust_to_weight_ratio_2nd = parseFloat(elThrust_to_weight_ratio_2nd.value);
	var v2nd_Stage_mass_ratio = parseFloat(el2nd_Stage_mass_ratio.value);
	var v3rd_Stage_mass_ratio = parseFloat(el3rd_Stage_mass_ratio.value);
	var vOrb_Stage_mass_ratio = parseFloat(elOrb_Stage_mass_ratio.value);
	var v1st_Dry_to_Wet_mass_ratio = parseFloat(el1st_Dry_to_Wet_mass_ratio.value);
	var v2nd_Dry_to_Wet_mass_ratio = parseFloat(el2nd_Dry_to_Wet_mass_ratio.value);
	var v3rd_Dry_to_Wet_mass_ratio = parseFloat(el3rd_Dry_to_Wet_mass_ratio.value);
	var vOrb_Dry_to_Wet_mass_ratio = parseFloat(elOrb_Dry_to_Wet_mass_ratio.value);
	var Unused_propellant_of_1st_Stage = parseFloat(elUnused_propellant_of_1st_Stage.value);
	var Unused_propellant_of_2nd_Stage = parseFloat(elUnused_propellant_of_2nd_Stage.value);
	var Unused_propellant_of_3rd_Stage = parseFloat(elUnused_propellant_of_3rd_Stage.value);
	var Unused_propellant_of_Transfer_Orbit_Stage = parseFloat(elUnused_propellant_of_Transfer_Orbit_Stage.value);
	var Specific_Impulse_Variation = parseFloat(elSpecific_Impulse_Variation.value);
	var First_stage_engine_thrust = parseFloat(elFirst_stage_engine_thrust.value);
	var First_stage_engines_number = parseFloat(elFirst_stage_engines_number.value);
	var First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
	var First_stage_isp_sea_level = parseFloat(elFirst_stage_isp_sea_level.value);
	var Second_stage_engine_thrust = parseFloat(elSecond_stage_engine_thrust.value);
	var Second_stage_engines_number = parseFloat(elSecond_stage_engines_number.value);
	var Second_stage_isp_sea_level = parseFloat(elSecond_stage_isp_sea_level.value);
	var Second_stage_isp_vac = parseFloat(elSecond_stage_isp_vac.value);
	var Third_stage_isp = parseFloat(elThird_stage_isp.value);
	var Transfer_Orbit_Stage_isp = parseFloat(elTransfer_Orbit_Stage_isp.value);
	var Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);

	//=== Output ===

	if (Abs_Calculation.checked == false)
// calculation using relative factors
	{
		if(elRocket.selectedIndex == 0)
		    if(elBooster.checked)
			Rocket_Mass = (parseFloat(elFirst_stage_total_thrust.value) + parseFloat(elSecond_stage_total_thrust.value))/elThrust_to_weight_ratio.value - Fairing_mass - Payload_mass;
		    else
			Rocket_Mass = elFirst_stage_total_thrust.value / elThrust_to_weight_ratio.value - Fairing_mass - Payload_mass;
		var First_stage_wet_mass = (Rocket_Mass*(1.-v2nd_Stage_mass_ratio/100.));
		var First_stage_propellant_mass = First_stage_wet_mass*(1.-v1st_Dry_to_Wet_mass_ratio/100.);
		var First_stage_dry_mass = First_stage_wet_mass - First_stage_propellant_mass;
		var First_stage_total_thrust = (Rocket_Mass+Fairing_mass + Payload_mass_calculated)*Thrust_to_weight_ratio;
		var Second_stage_wet_mass = (Rocket_Mass*(v2nd_Stage_mass_ratio/100. - vOrb_Stage_mass_ratio/100. - v3rd_Stage_mass_ratio/100.));
		var Second_stage_propellant_mass = Second_stage_wet_mass*(1.-v2nd_Dry_to_Wet_mass_ratio/100.);
		var Second_stage_dry_mass = Second_stage_wet_mass - Second_stage_propellant_mass;
		var Second_stage_total_thrust = (Rocket_Mass+Fairing_mass + Payload_mass_calculated - First_stage_wet_mass)*Thrust_to_weight_ratio_2nd;
		var Third_stage_wet_mass = Rocket_Mass*(v3rd_Stage_mass_ratio/100.);
		var Third_stage_propellant_mass = Third_stage_wet_mass*(1.-v3rd_Dry_to_Wet_mass_ratio/100.);
		var Third_stage_dry_mass = Third_stage_wet_mass - Third_stage_propellant_mass;

		if (elBooster.checked) First_stage_total_thrust = First_stage_total_thrust - Second_stage_total_thrust; 
		if(elRocket.selectedIndex == 0) 
			Second_stage_total_thrust = elSecond_stage_engine_thrust.value*elSecond_stage_engines_number.value;

		if(v3rd_Stage_mass_ratio == 0)var Third_stage_dry_mass = 0;
		else				  Third_stage_dry_mass = (Rocket_Mass*v3rd_Stage_mass_ratio/100.)*v3rd_Dry_to_Wet_mass_ratio/100.;			
		var Third_stage_propellant_mass = (Rocket_Mass*v3rd_Stage_mass_ratio/100.) - Third_stage_dry_mass;		     	

		if(vOrb_Stage_mass_ratio == 0)var Transfer_Orbit_stage_dry_mass = 0;
		else				  Transfer_Orbit_stage_dry_mass = (Rocket_Mass*vOrb_Stage_mass_ratio/100.)*vOrb_Dry_to_Wet_mass_ratio/100.;			
		var Transfer_Orbit_stage_propellant_mass = (Rocket_Mass*vOrb_Stage_mass_ratio/100.) - Transfer_Orbit_stage_dry_mass;		     	
	} else
	{
		First_stage_propellant_mass = parseFloat(elFirst_stage_propellant_mass.value);
		First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
		First_stage_wet_mass = First_stage_dry_mass + First_stage_propellant_mass;
		First_stage_total_thrust = parseFloat(elFirst_stage_total_thrust.value);
		Second_stage_propellant_mass = parseFloat(elSecond_stage_propellant_mass.value);
		Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);
		Second_stage_wet_mass = Second_stage_dry_mass + Second_stage_propellant_mass;
		Second_stage_total_thrust = parseFloat(elSecond_stage_total_thrust.value);
		Third_stage_propellant_mass = parseFloat(elThird_stage_propellant_mass.value);
		Third_stage_dry_mass = parseFloat(elThird_stage_dry_mass.value);
		Third_stage_wet_mass = Third_stage_dry_mass + Third_stage_propellant_mass;
		Transfer_Orbit_stage_propellant_mass = parseFloat(elTransfer_Orbit_stage_propellant_mass.value);
		Transfer_Orbit_stage_dry_mass = parseFloat(elTransfer_Orbit_stage_dry_mass.value);
	}

	//=== Losses calculation by Y.Lobanovsky ===

//  Gravity losses 
	var Const = (First_stage_isp_vac-(First_stage_isp_vac-First_stage_isp_sea_level)*.169);
	var Const2 = (Math.exp(112.13/(Const+(Const-First_stage_isp_sea_level)/((1.-.169)*1.8872)*(-.8612))));
	var Gravity_losses_at_specific_altitude = 9.81*(500./Math.sqrt((1.015*Math.sqrt((((Thrust_to_weight_ratio-1.)*9.81)*
			(Const2*(Const/First_stage_isp_sea_level)*
			((Thrust_to_weight_ratio-1.)*9.81)-(1.-Const2*(Const/First_stage_isp_sea_level))*9.81))))*9.81));

	if (Thrust_to_weight_ratio<1.46) var Gravity_losses = 4./3.* Gravity_losses_at_specific_altitude*(1.5+2.5*(Thrust_to_weight_ratio-1.17)-4.25*(Thrust_to_weight_ratio-1.17)*(Thrust_to_weight_ratio-1.17));
	else 				     Gravity_losses = 4./3.* 1.865*Gravity_losses_at_specific_altitude;
//  Correction for too low Thrust to weight ratio
	if (Thrust_to_weight_ratio<1.165) Gravity_losses = Gravity_losses + (1.165 - Thrust_to_weight_ratio) * 10000.;
//  Gravity losses for a single-stage rocket
	if (v2nd_Stage_mass_ratio == 0) Gravity_losses = 3./4. * Gravity_losses;

//  Average trajectory Isp for a rocket with booster stage
	if (elBooster.checked) 
	  {
		var Total_sea_level_thrust = (Rocket_Mass+Fairing_mass + Payload_mass_calculated) * Thrust_to_weight_ratio;
		var Second_stage_sea_level_thrust = (Rocket_Mass + Fairing_mass + Payload_mass - First_stage_wet_mass) * Thrust_to_weight_ratio_2nd;
		var First_stage_sea_level_thrust = Total_sea_level_thrust - Second_stage_sea_level_thrust;
		var Second_stage_vac_thrust = Second_stage_sea_level_thrust / Second_stage_isp_sea_level * Second_stage_isp_vac;
		var First_stage_vac_thrust = First_stage_sea_level_thrust / First_stage_isp_sea_level * First_stage_isp_vac;
		var First_stage_isp_sea_level_summ = Total_sea_level_thrust / (First_stage_sea_level_thrust/First_stage_isp_sea_level + Second_stage_sea_level_thrust/Second_stage_isp_sea_level);
		First_stage_isp_vac_summ = (First_stage_vac_thrust + Second_stage_vac_thrust) / (First_stage_vac_thrust/First_stage_isp_vac + Second_stage_vac_thrust/Second_stage_isp_vac);
		First_stage_isp_sea_level = First_stage_isp_sea_level_summ;
		First_stage_isp_vac = First_stage_isp_vac_summ;
	  }

	var r1 = Math.exp(825. / (First_stage_isp_vac * 9.81));
	var r2 = First_stage_isp_vac / First_stage_isp_sea_level;
	var asr = 1.015 * Math.sqrt((Thrust_to_weight_ratio-1.)*9.81*(r1*r2*(Thrust_to_weight_ratio-1.)*9.81-(1.-r1*r2)*9.81))
	var tau = 375. / Math.sqrt(asr *9.81);
	First_stage_run_time = (First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage)/(First_stage_total_thrust/parseFloat(elFirst_stage_isp_sea_level.value)));
	First_stage_average_trajectory_isp = First_stage_isp_vac - 0.6266 * (First_stage_isp_vac - First_stage_isp_sea_level) / (First_stage_run_time /tau);
//  Pressure Losses
	Lift_off_Mass = Rocket_Mass + Fairing_mass + Payload_mass;
	First_stage_final_mass = Lift_off_Mass-First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage) - Second_stage_prop_used_with_booster;
	var Pressure_losses = 9.80665*(First_stage_isp_vac - First_stage_average_trajectory_isp)*Math.log(Lift_off_Mass/First_stage_final_mass);
	elPressure_losses.textContent = Pressure_losses.toFixed(1);
//  Aerodynamic Losses
//		var ksi = Math.pow(Lift_off_Mass/2945000., 1/3);
//		if (Thrust_to_weight_ratio>1.17) var Aerodynamic_losses = Math.exp(-Starting_point_Altitude/7.16)* Math.pow(ksi, -0.9)* (.045+.1*Math.pow(Thrust_to_weight_ratio-1.17, 1.5))*1000.;
//		else 				     Aerodynamic_losses = Math.exp(-Starting_point_Altitude/7.16)* Math.pow(ksi, -0.9)* (.045+.1*(1.3332*Thrust_to_weight_ratio*Thrust_to_weight_ratio-2.9399*Thrust_to_weight_ratio+1.6148))*1000.;
	if (Thrust_to_weight_ratio>1.17) var Aerodynamic_losses = Math.exp(-Starting_point_Altitude/7.16)/(Lift_off_Mass/2945000)*Math.pow(Max_midsection_D/10.1, 2.) * (.045+.1*Math.pow(Thrust_to_weight_ratio-1.17, 1.5))*1000.;
	else 				     Aerodynamic_losses = Math.exp(-Starting_point_Altitude/7.16)/(Lift_off_Mass/2945000)*Math.pow(Max_midsection_D/10.1, 2.) *	(.045+.1*(1.3332*Thrust_to_weight_ratio*Thrust_to_weight_ratio-2.9399*Thrust_to_weight_ratio+1.6148))*1000.;
//  Correction taking into account the initial launch speed
	var Add_Speed = Math.min(1200.,parseFloat(elAdditional_Speed.value));
        Aerodynamic_losses = Aerodynamic_losses*(1.+3.75e-5*Add_Speed+2.09e-6*Add_Speed*Add_Speed);
//  Gravity losses 
	var Const = (First_stage_isp_vac-(First_stage_isp_vac-First_stage_isp_sea_level)*.169);
	var Const2 = (Math.exp(112.13/(Const+(Const-First_stage_isp_sea_level)/((1.-.169)*1.8872)*(-.8612))));
	var Gravity_losses_at_specific_altitude = 9.81*(500./Math.sqrt((1.015*Math.sqrt((((Thrust_to_weight_ratio-1.)*9.81)*
			(Const2*(Const/First_stage_isp_sea_level)*
			((Thrust_to_weight_ratio-1.)*9.81)-(1.-Const2*(Const/First_stage_isp_sea_level))*9.81))))*9.81));

	if (Thrust_to_weight_ratio<1.46) var Gravity_losses = 4./3.* Gravity_losses_at_specific_altitude*(1.5+2.5*(Thrust_to_weight_ratio-1.17)-4.25*(Thrust_to_weight_ratio-1.17)*(Thrust_to_weight_ratio-1.17));
	else 				     Gravity_losses = 4./3.* 1.865*Gravity_losses_at_specific_altitude;
//  Correction for too low Thrust to weight ratio
	if (Thrust_to_weight_ratio<1.165) Gravity_losses = Gravity_losses + (1.165 - Thrust_to_weight_ratio) * 10000.;
//  Gravity losses for a single-stage rocket
	if (v2nd_Stage_mass_ratio == 0) Gravity_losses = 3./4. * Gravity_losses;

	var Ascent_Time = 519;
//		First_stage_run_time = (First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage)/(elLift_off_Mass.textContent * Thrust_to_weight_ratio/First_stage_isp_sea_level));
	if (elFuel.selectedIndex == 10) First_stage_run_time = 1.3 * First_stage_run_time; 
	Second_stage_total_Start_mass = Rocket_Mass + Fairing_mass + Payload_mass - First_stage_wet_mass;
	var Second_stage_isp = Second_stage_isp_vac;
	if (elBooster.checked) Second_stage_isp = Second_stage_isp_sea_level;
	Second_stage_run_time = Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage)/(Second_stage_total_Start_mass*Thrust_to_weight_ratio_2nd/Second_stage_isp);

// Calculation of the third stage run time to reach the LEO, assuming that the initial thrust to weight ratio is 0.5
	var Transfer_Orbit_stage_run_time = 0.
	var Vsp_for_LEO_with_losses = Vsp_for_LEO + Gravity_losses + 200.;
	if (elStages.selectedIndex > 0)
	   {
		var Transfer_Orbit_stage_delta_v_to_LEO = Vsp_for_LEO_with_losses - parseFloat(elFirst_stage_delta_v.textContent) - parseFloat(elSecond_stage_delta_v.textContent);
		if (Transfer_Orbit_stage_delta_v_to_LEO > 0.) 
		   {
			var Transfer_Orbit_stage_total_Start_mass = Lift_off_Mass - First_stage_wet_mass - Second_stage_wet_mass - Third_stage_wet_mass - Fairing_mass;
			var Transfer_Orbit_stage_final_mass = 1./(Math.exp(Transfer_Orbit_stage_delta_v_to_LEO/(Transfer_Orbit_Stage_isp*9.80665))/Transfer_Orbit_stage_total_Start_mass);
		        var Transfer_Orbit_stage_prop_to_LEO = Transfer_Orbit_stage_total_Start_mass - Transfer_Orbit_stage_final_mass;
			Transfer_Orbit_stage_run_time = Transfer_Orbit_stage_prop_to_LEO/(Transfer_Orbit_stage_total_Start_mass*0.5/parseFloat(elTransfer_Orbit_Stage_isp.value));		
		   }
	   }

// Additional losses due to non-optimal thrust-to-weight ratio of the first and second stages.
	var Additional_losses = 0.0;
	var Second_stage_delta_v_to_LEO = Vsp_for_LEO_with_losses - parseFloat(elFirst_stage_delta_v.textContent);
	if (Second_stage_delta_v_to_LEO > parseFloat(elSecond_stage_delta_v.textContent)) Second_stage_delta_v_to_LEO = parseFloat(elSecond_stage_delta_v.textContent);
//		var First_to_Second_stage_Vsp_ratio = 0.;
//		if (elStages.selectedIndex > 0) First_to_Second_stage_Vsp_ratio = Thrust_to_weight_ratio / Thrust_to_weight_ratio_2nd * Math.sqrt(parseFloat(elSecond_stage_delta_v.textContent) / parseFloat(elFirst_stage_delta_v.textContent));
//		if (First_to_Second_stage_Vsp_ratio > 4.3) Additional_losses = Additional_losses + 0.08*(First_to_Second_stage_Vsp_ratio - 4.3)*parseFloat(elSecond_stage_delta_v.textContent);

	var First_to_Second_stage_Run_time_ratio = (Second_stage_run_time / parseFloat(elSecond_stage_delta_v.textContent) * Second_stage_delta_v_to_LEO) / First_stage_run_time;
	if (elBooster.checked) 	First_to_Second_stage_Run_time_ratio = (Second_stage_run_time - First_stage_run_time -5.0) / First_stage_run_time;
//		if (First_to_Second_stage_Run_time_ratio > 2.5) Additional_losses = Additional_losses + 0.04*Thrust_to_weight_ratio*(First_to_Second_stage_Run_time_ratio - 2.5)*parseFloat(elSecond_stage_delta_v.textContent);
	if (First_to_Second_stage_Run_time_ratio > 2.75) Additional_losses = Additional_losses + 0.04*Thrust_to_weight_ratio*(First_to_Second_stage_Run_time_ratio - 2.75)*Second_stage_delta_v_to_LEO;;

//		elAggressivity.textContent = First_to_Second_stage_Run_time_ratio.toFixed(1);
	Ascent_Time = First_stage_run_time + Second_stage_run_time + 5.;
	if (elBooster.checked) 
		{var Second_stage_run_time_ = Second_stage_run_time;
		 if (First_stage_run_time > Second_stage_run_time) Second_stage_run_time_ = First_stage_run_time +5.;
		 Second_stage_prop_used_with_booster = (Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage))*(1. - (Second_stage_run_time_ - First_stage_run_time -5.)/Second_stage_run_time);
                 Ascent_Time = Second_stage_run_time_ + 5. ;}
	
//		if(elFirst_stage_delta_v.textContent != "NaN") Ascent_Time = Ascent_Time*Vsp_for_LEO_with_losses/(parseFloat(elFirst_stage_delta_v.textContent) + parseFloat(elSecond_stage_delta_v.textContent));

	//=== Additional losses calculation by J.Schilling ===
	var Gravity_losses_Time_Correction = 0.;
//		if(Ascent_Time > 523.) Gravity_losses_Time_Correction = 0.275*(0.0013*Math.pow(Ascent_Time,2)+0.0882*Ascent_Time)-110.;
	if(elStages.selectedIndex > 0) Gravity_losses_Time_Correction = 0.275*(0.0013*Math.pow(Ascent_Time,2)+0.0882*Ascent_Time)-110.;
	Gravity_losses = Gravity_losses+Gravity_losses_Time_Correction + Additional_losses;
	var Summary_losses = Gravity_losses+Aerodynamic_losses+Pressure_losses+145.;

// Calculation of the fuel reserve for Reusability
	var First_stage_Unused_propellant=s_rocket_data[elRocket.selectedIndex][17];
	var First_stage_landing_mass = First_stage_dry_mass + First_stage_Unused_propellant*First_stage_propellant_mass/100.;
	Reus_corr = ((Math.exp(2200./(First_stage_isp_vac*9.80665))*First_stage_landing_mass-First_stage_landing_mass)/First_stage_propellant_mass*100.);
        
	//=== Recursion ===
	for (itt = 1; itt <= 5; ++itt)
	{
		Lift_off_Mass = Rocket_Mass + Fairing_mass + Payload_mass;
	
//  242.5m/s is the difference between delta velocity for 200 km orbit injection 
//  (8031m/s according to a Hohmann Transfer formula) and the orbital velocity at this orbit (7788.5m/s).
		var Vsp_with_losses = Vsp_for_target_orbit+Summary_losses-242.5;
		var First_stage_final_mass = Lift_off_Mass-First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage) - Second_stage_prop_used_with_booster;
		if (v2nd_Stage_mass_ratio == 0) First_stage_final_mass = First_stage_final_mass - Fairing_mass;	
		var First_stage_delta_v = 9.80665*First_stage_isp_vac*Math.log(Lift_off_Mass/First_stage_final_mass);
		var Fairing_jettison_delta_v = Fairing_jettison_velocity*1.2;
		if (First_stage_delta_v > Fairing_jettison_velocity*1.2 && v2nd_Stage_mass_ratio > 0) Fairing_jettison_delta_v = First_stage_delta_v+100.;
		var Second_stage_delta_v_before_fairing_jettison = Fairing_jettison_delta_v-First_stage_delta_v;
		var Second_stage_total_Start_mass = Lift_off_Mass - First_stage_wet_mass ;
		var Second_stage_total_mass_before_fairing_jettison =1./(Math.exp((Fairing_jettison_delta_v-First_stage_delta_v)/(Second_stage_isp_vac*9.80665))/(Second_stage_total_Start_mass - Second_stage_prop_used_with_booster));
		var Second_stage_total_mass_before_battery_jettison = Lift_off_Mass - First_stage_wet_mass - Fairing_mass - .67*Second_stage_propellant_mass;
		var Second_stage_delta_v_before_battery_jettison = 9.80665*Second_stage_isp_vac*
			Math.log((Second_stage_total_mass_before_fairing_jettison-Fairing_mass)/Second_stage_total_mass_before_battery_jettison);

		var Third_stage_total_Start_mass = Lift_off_Mass - First_stage_wet_mass - Second_stage_wet_mass - Fairing_mass;
		var Third_stage_final_mass = Third_stage_total_Start_mass - Third_stage_propellant_mass*(1. - Unused_propellant_of_3rd_Stage/100.);
		var Third_stage_delta_v = 9.80665*Third_stage_isp*Math.log(Third_stage_total_Start_mass/Third_stage_final_mass);

		var Transfer_Orbit_stage_total_Start_mass = Lift_off_Mass - First_stage_wet_mass - Second_stage_wet_mass - Third_stage_wet_mass - Fairing_mass;

		if (vOrb_Stage_mass_ratio == 0 || v2nd_Stage_mass_ratio == 0)
		{
//				elStages.selectedIndex = 0; 
			fStagesChange();
			var Second_stage_delta_v = Vsp_with_losses-First_stage_delta_v;
			var Second_stage_final_mass = 1./(Math.exp((Second_stage_delta_v
				- Second_stage_delta_v_before_fairing_jettison
				- Second_stage_delta_v_before_battery_jettison)
				/ (Second_stage_isp_vac*9.80665))/(Second_stage_total_mass_before_battery_jettison
				-Jettisoned_battery_mass ));
			Payload_mass_calculated = Second_stage_final_mass+Jettisoned_battery_mass-Second_stage_dry_mass-Second_stage_propellant_mass/100.*Unused_propellant_of_2nd_Stage; 
			if(Payload_mass_calculated.toFixed(0) == "NaN") Payload_mass_calculated = 0.;
//  Single-stage rocket calculation
			if (v2nd_Stage_mass_ratio == 0)	
			{
				elOrb_Stage_mass_ratio.value = 0.;
				var First_stage_mass_bfr_fairng_jett = 1./(Math.exp(Fairing_jettison_delta_v/ (First_stage_average_trajectory_isp*9.80665))/Lift_off_Mass);
				elSecond_stage_total_mass_before_fairing_jettison.textContent = First_stage_mass_bfr_fairng_jett.toFixed(1);
				First_stage_final_mass = 1./(Math.exp((Vsp_with_losses-Pressure_losses-Fairing_jettison_delta_v)/ (First_stage_average_trajectory_isp*9.80665))/(First_stage_mass_bfr_fairng_jett - Fairing_mass));
				Payload_mass_calculated = First_stage_final_mass - First_stage_dry_mass - First_stage_propellant_mass/100.*Unused_propellant_of_1st_Stage; 
			}

			var Transfer_Orbit_stage_final_mass = Transfer_Orbit_stage_total_Start_mass;

		} else
		{
			Second_stage_final_mass = Third_stage_total_Start_mass + Second_stage_dry_mass - Jettisoned_battery_mass + Second_stage_propellant_mass*(Unused_propellant_of_2nd_Stage/100.);
			Second_stage_delta_v = Second_stage_delta_v_before_fairing_jettison
				+ Second_stage_delta_v_before_battery_jettison
				+9.80665*Second_stage_isp_vac*Math.log((Second_stage_total_mass_before_battery_jettison-Jettisoned_battery_mass)/Second_stage_final_mass);
			if (vOrb_Stage_mass_ratio == 0) Transfer_Orbit_stage_delta_v_required = 0;
			else 
							Transfer_Orbit_stage_delta_v_required = Vsp_with_losses-First_stage_delta_v-Second_stage_delta_v-Third_stage_delta_v;
//				Transfer_Orbit_stage_total_Start_mass = Second_stage_final_mass+Jettisoned_battery_mass-Second_stage_dry_mass-Second_stage_propellant_mass/100.*Unused_propellant_of_2nd_Stage;
			Transfer_Orbit_stage_total_Start_mass = Third_stage_final_mass-Third_stage_dry_mass-Third_stage_propellant_mass/100.*Unused_propellant_of_3rd_Stage;
			Transfer_Orbit_stage_final_mass = 1./(Math.exp(Transfer_Orbit_stage_delta_v_required/(Transfer_Orbit_Stage_isp*9.80665))/Transfer_Orbit_stage_total_Start_mass);
			Payload_mass_calculated = (Transfer_Orbit_stage_final_mass-Transfer_Orbit_stage_dry_mass-Transfer_Orbit_stage_propellant_mass/100.*Unused_propellant_of_Transfer_Orbit_Stage); 
			if(Payload_mass_calculated.toFixed(0) == "NaN") Payload_mass_calculated = 0.;
		}

	//=== Result ===
		var Assumed_payload_mass_base = parseFloat(elAssumed_payload_mass.value);

		elPayload_mass_calculated.textContent = Payload_mass_calculated.toFixed(1);
		elPayload_to_Lift_off_mass_ratio.textContent = (Payload_mass / Lift_off_Mass * 100.).toFixed(2);
		var Payload_change = (Payload_mass_calculated/Assumed_payload_mass_base *100.).toFixed(1);
		elPayload_change.textContent = Payload_change;	
//			var Last_Payload_change =  ((Payload_mass_calculated - Last_Payload_mass) / Last_Payload_mass *100.).toFixed(1);
		var Last_Payload_change =  ((Payload_mass_calculated - Last_Payload_mass) / Assumed_payload_mass_base *100.).toFixed(1);
		var Sign = "";
		if (Last_Payload_change > 0.) Sign = "+";
		elLast_Payload_change.textContent = Sign + Last_Payload_change;
		if (Payload_change < 0)
		 {
			elPayload_to_Lift_off_mass_ratio.textContent = "";
			elPayload_change.textContent = "";
			elLast_Payload_change.textContent = "";
		 }

		if(Payload_mass_calculated > 100.)
		 {
			var strComma = Math.round(Payload_mass_calculated);
			if(!!strComma) strComma = strComma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			elPayload_mass_calculated.textContent = strComma;
		 }

		if (Payload_mass_calculated > 0)
		{
			for (var i = 0; i < elNegativePayload.length; i++)
				elNegativePayload[i].style.color = "black";
		} else
		{
			if (Payload_mass_calculated < -Assumed_payload_mass_base) Payload_mass_calculated = -Assumed_payload_mass_base;
			for (var i = 0; i < elNegativePayload.length; i++)
				elNegativePayload[i].style.color = "red";
		}

		Assumed_payload_mass = Payload_mass_calculated;
//			if(elRocket.selectedIndex == 0)elAssumed_payload_mass.value = Assumed_payload_mass;
		Payload_mass = Payload_mass_calculated;
	}

	elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);
	elGravity_losses_at_specific_altitude.textContent = Gravity_losses_at_specific_altitude.toFixed(1);
	elAscent_Time.textContent = Ascent_Time.toFixed(1);
	elGravity_losses.textContent = Gravity_losses.toFixed(1);
	elAerodynamic_losses.textContent = Aerodynamic_losses.toFixed(1);
//		var Summary_lossesPr = Gravity_lossesPr + Aerodynamic_losses + 145.;
	elSummary_losses.textContent = Summary_losses.toFixed(1);
	var Assumed_losses = Summary_losses/Vsp_for_LEO;
	elAssumed_losses.textContent = (Assumed_losses*100.).toFixed(2);
	elVsp_with_losses.textContent = Vsp_with_losses.toFixed(1);
	elFirst_stage_average_trajectory_isp.textContent = First_stage_average_trajectory_isp.toFixed(1);
	elFirst_stage_propellant_mass.value = First_stage_propellant_mass.toFixed(1);		
	elFirst_stage_dry_mass.value = First_stage_dry_mass.toFixed(1);
	elFirst_stage_total_thrust.value = First_stage_total_thrust.toFixed(1);
	elFirst_stage_final_mass.textContent = First_stage_final_mass.toFixed(1);
	elFirst_stage_delta_v.textContent = First_stage_delta_v.toFixed(1);
	elFairing_jettison_delta_v.textContent = Fairing_jettison_delta_v.toFixed(1);
	elSecond_stage_total_Start_mass.textContent = Second_stage_total_Start_mass.toFixed(1);
	if(Second_stage_dry_mass > 0) elSecond_stage_total_mass_before_fairing_jettison.textContent = Second_stage_total_mass_before_fairing_jettison.toFixed(1);
	elSecond_stage_total_mass_before_battery_jettison.textContent = Second_stage_total_mass_before_battery_jettison.toFixed(1);
	elSecond_stage_delta_v_before_battery_jettison.textContent = Second_stage_delta_v_before_battery_jettison.toFixed(1);
	elSecond_stage_final_mass.textContent = Second_stage_final_mass.toFixed(1);
	elSecond_stage_delta_v.textContent = Second_stage_delta_v.toFixed(1);
	elSecond_stage_dry_mass.value = Second_stage_dry_mass.toFixed(1);
	elSecond_stage_total_thrust.value = Second_stage_total_thrust.toFixed(1);
	elSecond_stage_propellant_mass.value = Second_stage_propellant_mass.toFixed(1);

	elThird_stage_delta_v.textContent = Third_stage_delta_v.toFixed(1);
	elThird_stage_total_Start_mass.textContent = Third_stage_total_Start_mass.toFixed(1);
	elThird_stage_final_mass.textContent = Third_stage_final_mass.toFixed(1);
	elThird_stage_dry_mass.value = Third_stage_dry_mass.toFixed(1);          
	elThird_stage_propellant_mass.value = Third_stage_propellant_mass.toFixed(1);
	elThird_stage_total_impulse.textContent = (9.80665 * Third_stage_propellant_mass/100.*(100.-Unused_propellant_of_3rd_Stage)*parseFloat(elThird_stage_isp.value)).toExponential(3);

	elTransfer_Orbit_stage_delta_v_required.textContent = Transfer_Orbit_stage_delta_v_required.toFixed(1);
	elTransfer_Orbit_stage_total_Start_mass.textContent = Transfer_Orbit_stage_total_Start_mass.toFixed(1);
	elTransfer_Orbit_stage_final_mass.textContent = Transfer_Orbit_stage_final_mass.toFixed(1);
	elTransfer_Orbit_stage_dry_mass.value = Transfer_Orbit_stage_dry_mass.toFixed(1);
	elTransfer_Orbit_stage_propellant_mass.value = Transfer_Orbit_stage_propellant_mass.toFixed(1);
	elFirst_stage_total_impulse.textContent = (9.80665 * First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage)*First_stage_average_trajectory_isp).toExponential(3);
//		First_stage_run_time = (First_stage_propellant_mass/100.*(100.-Unused_propellant_of_1st_Stage)/(Lift_off_Mass*Thrust_to_weight_ratio/First_stage_isp_sea_level));
//		if (elFuel.selectedIndex == 8) First_stage_run_time = 1.2 * First_stage_run_time; 
	elFirst_stage_run_time.textContent = First_stage_run_time.toFixed(0);
	elFirst_stage_max_acc.textContent = (Lift_off_Mass/First_stage_final_mass*Thrust_to_weight_ratio*First_stage_isp_vac/First_stage_isp_sea_level).toFixed(1);
	if (elRocket.selectedIndex == 0)
	{
		var Second_stage_engine_thrust = parseFloat(elSecond_stage_engine_thrust.value);
		var Second_stage_engines_number = parseFloat(elSecond_stage_engines_number.value);
		Thrust_to_weight_ratio_2nd = Second_stage_engines_number*elSecond_stage_engine_thrust.value/(Rocket_Mass*el2nd_Stage_mass_ratio.value/100.+Fairing_mass+Payload_mass);
		elThrust_to_weight_ratio_2nd.value = Thrust_to_weight_ratio_2nd.toFixed(3);  
	} 
	elSecond_stage_total_impulse.textContent = (9.80665 * Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage)*Second_stage_isp_vac).toExponential(3);
	var Second_stage_isp = Second_stage_isp_vac;
	if (elBooster.checked) Second_stage_isp = Second_stage_isp_sea_level;
	Second_stage_run_time = (Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage)/(Second_stage_total_Start_mass*Thrust_to_weight_ratio_2nd/Second_stage_isp));
	elSecond_stage_run_time.textContent = Second_stage_run_time.toFixed(0);
	elSecond_stage_max_acc.textContent = (Second_stage_total_Start_mass/Second_stage_final_mass*Thrust_to_weight_ratio_2nd*Second_stage_isp_vac/Second_stage_isp).toFixed(1);
	elTransfer_Orbit_stage_total_impulse.textContent = (9.80665 * Transfer_Orbit_stage_propellant_mass/100.*(100.-Unused_propellant_of_Transfer_Orbit_Stage)*parseFloat(elTransfer_Orbit_Stage_isp.value)).toExponential(3);

	if (elBooster.checked)
		Second_stage_prop_used_with_booster = (Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage))*(1. - (Second_stage_run_time - First_stage_run_time - 5.)/Second_stage_run_time);

	var Orbit_Apogee = parseFloat(elOrbit_Apogee.value);
	if (Orbit_Apogee == 0)Orbit_Apogee = parseFloat(elOrbit_Perigee.value);
	var a = 0.5 * (200 + 2 * 6371. + Orbit_Apogee);
//		var transfertime =  0.5 * 2.0 * Math.PI * Math.sqrt( a * a * a / 398600.4418 ) + parseFloat(elFirst_stage_run_time.textContent) + parseFloat(elSecond_stage_run_time.textContent);
        var transfertime = First_stage_run_time + Second_stage_run_time;
	if (elBooster.checked) transfertime = Second_stage_run_time; 
	transfertime = transfertime -2650*200/Orbit_Apogee + 0.5 * 2.0 * Math.PI * Math.sqrt( a * a * a / 398600.4418 );
	if(s_orbit_data[elOrbit.selectedIndex][5] == 0)		
		{elTransfer_time.textContent = Sec2Day(transfertime);}
	else
		{elTransfer_time.textContent = Sec2Day(s_orbit_data[elOrbit.selectedIndex][5]);}

}

function OnForm()
{
	Last_Payload_mass = Payload_mass_calculated;
	CalculateScore();
	CalculationError();		
}

function Calculate()
{
//		elStages.selectedIndex = 3;
	if ( parseFloat(el3rd_Stage_mass_ratio.value) == 0) elStages.selectedIndex = 2;
	if ( parseFloat(elOrb_Stage_mass_ratio.value) == 0) elStages.selectedIndex = 1;
	if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) elStages.selectedIndex = 0;
	if (elLimitation.checked) SetLimitation();
	CalculateTargetVelocity();
	CalculateTargetMass();
	if(Abs_Calculation.checked) 
	{ 
		MassRecalculate();
		CalculateTargetMass();
		MassRecalculate();
		CalculateTargetMass();
	}
		if (parseFloat(elOrb_Stage_mass_ratio.value) == 0)
			elRequired.textContent = "(required)"; 
		 else
			elRequired.textContent = " ";
}

function Calculate_Rel()
{
	Abs_Calculation.checked = false;
	Calculate();
	updateFuel();
}

function Calculate_Abs()
{
	Abs_Calculation.checked = true;
	Calculate();
}

function CalculationError()
{
	var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
	var First_stage_final_mass = parseFloat(elFirst_stage_final_mass.textContent);
	var Second_stage_total_Start_mass = parseFloat(elSecond_stage_total_Start_mass.textContent) - Second_stage_prop_used_with_booster;
	var Second_stage_total_mass_before_fairing_jettison = parseFloat(elSecond_stage_total_mass_before_fairing_jettison.textContent);
	var Fairing_mass = parseFloat(elFairing_mass.value);									  	
	var Second_stage_total_mass_before_battery_jettison = parseFloat(elSecond_stage_total_mass_before_battery_jettison.textContent	);
	var Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);						   	
	var Second_stage_final_mass = parseFloat(elSecond_stage_final_mass.textContent);					     	
	var Third_stage_total_Start_mass = parseFloat(elThird_stage_total_Start_mass.textContent);
	var Third_stage_final_mass = parseFloat(elThird_stage_final_mass.textContent);
	var Transfer_Orbit_stage_total_Start_mass = parseFloat(elTransfer_Orbit_stage_total_Start_mass.textContent);
	var Transfer_Orbit_stage_final_mass = parseFloat(elTransfer_Orbit_stage_final_mass.textContent);
	var First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
	var Second_stage_isp_sea_level = parseFloat(elSecond_stage_isp_sea_level.value);
	var Second_stage_isp_vac = parseFloat(elSecond_stage_isp_vac.value);
	var First_stage_average_trajectory_isp = parseFloat(elFirst_stage_average_trajectory_isp.textContent);
	var Third_stage_isp = parseFloat(elThird_stage_isp.value);
	var Transfer_Orbit_Stage_isp = parseFloat(elTransfer_Orbit_Stage_isp.value);
	var Vsp_with_losses = parseFloat(elVsp_with_losses.textContent);
	var Pressure_losses = parseFloat(elPressure_losses.textContent);
	if (elBooster.checked) 	First_stage_isp_vac = First_stage_isp_vac_summ;
	if (parseFloat(elSecond_stage_dry_mass.value) > 0)
	var Summary_Delta_V = 9.80665*First_stage_isp_vac*Math.log(Lift_off_Mass/First_stage_final_mass)
	+ 9.80665*Second_stage_isp_vac*Math.log(Second_stage_total_Start_mass/Second_stage_total_mass_before_fairing_jettison)
	+ 9.80665*Second_stage_isp_vac*Math.log((Second_stage_total_mass_before_fairing_jettison - Fairing_mass)/Second_stage_total_mass_before_battery_jettison)
	+ 9.80665*Second_stage_isp_vac*Math.log((Second_stage_total_mass_before_battery_jettison - Jettisoned_battery_mass)/Second_stage_final_mass)
	+ 9.80665*Third_stage_isp*Math.log(Third_stage_total_Start_mass/Third_stage_final_mass)
	+ 9.80665*Transfer_Orbit_Stage_isp*Math.log(Transfer_Orbit_stage_total_Start_mass/Transfer_Orbit_stage_final_mass);
	else
	Summary_Delta_V = 9.80665*First_stage_average_trajectory_isp*Math.log(Lift_off_Mass/Second_stage_total_mass_before_fairing_jettison)
	+ 9.80665*First_stage_average_trajectory_isp*Math.log((Second_stage_total_mass_before_fairing_jettison - Fairing_mass)/First_stage_final_mass)+Pressure_losses;

	elCalculation_Error.textContent = (Vsp_with_losses - Summary_Delta_V).toFixed(1);

	var First_stage_propellant_mass = parseFloat(elFirst_stage_propellant_mass.value);
	var First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
	var Second_stage_propellant_mass = parseFloat(elSecond_stage_propellant_mass.value);
	var Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);
	var Third_stage_propellant_mass = parseFloat(elThird_stage_propellant_mass.value);
	var Third_stage_dry_mass = parseFloat(elThird_stage_dry_mass.value);
	var Transfer_Orbit_stage_propellant_mass = parseFloat(elTransfer_Orbit_stage_propellant_mass.value);
	var Transfer_Orbit_stage_dry_mass = parseFloat(elTransfer_Orbit_stage_dry_mass.value);
        var Summary_Mass = First_stage_propellant_mass + First_stage_dry_mass
		+ Second_stage_propellant_mass + Second_stage_dry_mass
		+ Third_stage_propellant_mass + Third_stage_dry_mass
		+ Transfer_Orbit_stage_propellant_mass + Transfer_Orbit_stage_dry_mass
		+ Fairing_mass + Payload_mass_calculated;
		
//		elCalculation_Error.textContent = (Summary_Mass - Lift_off_Mass).toFixed(1);
}

function updateStartingPoint()
{
	if(!elAir_Launch.checked) elStarting_point_Altitude.value = s_start_point_data[elStartingPoint.selectedIndex][3];
	elSpaceport_latitude.value = s_start_point_data[elStartingPoint.selectedIndex][1].toFixed(2);
}

function updateStartingPointAndCalc()
{
	updateStartingPoint();
	updateOrbit();
	Calculate();
}

function updateOrbit()
{
	if (s_orbit_data[elOrbit.selectedIndex][3] > 0 && 
		s_orbit_data[elOrbit.selectedIndex][3] < elSpaceport_latitude.value) elOrbit.selectedIndex = 0;

	if ((elOrbit.selectedIndex > 2) || (elOrbit_Perigee.value == "")) elOrbit_Perigee.value = s_orbit_data[elOrbit.selectedIndex][1];
	
	elOrbit_Apogee.value = 0;
	if ((elOrbit.selectedIndex > 0) || (elOrbit_Apogee.value == "")) elOrbit_Apogee.value = s_orbit_data[elOrbit.selectedIndex][2];

	elOrbitDescription.textContent = s_orbit_data[elOrbit.selectedIndex][6];
		
	if (s_orbit_data[elOrbit.selectedIndex][3] < 0)
		{
		 elOrbit_Inclination.value = s_start_point_data[elStartingPoint.selectedIndex][4];
//				If the rocket isn't the Saturn V
		 if (elStartingPoint.selectedIndex == 0 && elRocket.selectedIndex != 1)elOrbit_Inclination.value = 28.61;
		}
	else
		elOrbit_Inclination.value = s_orbit_data[elOrbit.selectedIndex][3];
		
	elExtra_speed_for_flight_to_the_planets.value = s_orbit_data[elOrbit.selectedIndex][4];

	if (elOrbit.selectedIndex == 5)
	{
		for (var i = 0; i < elsGEO.length; i++)
			elsGEO[i].removeAttribute("style");
		for (var i = 0; i < elsGEOI.length; i++)
			elsGEOI[i].style.display = "none";
	} else
	{
		for (var i = 0; i < elsGEO.length; i++)
			elsGEO[i].style.display = "none";
		for (var i = 0; i < elsGEOI.length; i++)
			elsGEOI[i].removeAttribute("style");
	}

	if (s_orbit_data[elOrbit.selectedIndex][4] > 0)
	{
		for (var i = 0; i < elInterplanetary.length; i++)
			elInterplanetary[i].removeAttribute("style");
		for (var i = 0; i < elNearEarth.length; i++)
			elNearEarth[i].style.display = "none";
	} else
	{                               
		for (var i = 0; i < elInterplanetary.length; i++)
			elInterplanetary[i].style.display = "none";
		for (var i = 0; i < elNearEarth.length; i++)
			elNearEarth[i].removeAttribute("style");
	}
//	Reducing the propellant margin on the second stage to achieve high orbits.
	if (Orig_Orbit_Index < elOrbit.selectedIndex)
	 {
	  if (elOrbit.selectedIndex > 3 && elStages.selectedIndex == 1 && elUnused_propellant_of_2nd_Stage.value > 0.5)elUnused_propellant_of_2nd_Stage.value = 0.51;
	  if (elOrbit.selectedIndex > 3 && elStages.selectedIndex == 2 && elUnused_propellant_of_Transfer_Orbit_Stage.value > 0.5)elUnused_propellant_of_Transfer_Orbit_Stage.value = 0.51;
	 }
	  if (elOrbit.selectedIndex < 4 && elStages.selectedIndex == 1 && elUnused_propellant_of_2nd_Stage.value == 0.51)elUnused_propellant_of_2nd_Stage.value = s_rocket_data[elRocket.selectedIndex][18];
	  if (elOrbit.selectedIndex < 4 && elStages.selectedIndex == 2 && elUnused_propellant_of_Transfer_Orbit_Stage.value == 0.51)elUnused_propellant_of_Transfer_Orbit_Stage.value = s_rocket_data[elRocket.selectedIndex][20];
}

function LatitudeChange()
{
	if (elOrbit.selectedIndex == 0 || elOrbit.selectedIndex == 14)
	{
	Spaceport_latitude = Math.abs(parseFloat(elSpaceport_latitude.value));
	Orbit_Inclination = parseFloat(elOrbit_Inclination.value);

	if (Orbit_Inclination < Spaceport_latitude)
		{
		 Orbit_Inclination = Spaceport_latitude;
		 elOrbit_Inclination.value = Orbit_Inclination.toFixed(2);
		}
	}

	if (elOrbit.selectedIndex > 2 && elOrbit.selectedIndex != 14)
	{
	 Spaceport_latitude = Math.abs(parseFloat(elSpaceport_latitude.value));
	 elOrbit_Inclination.value = Spaceport_latitude.toFixed(2);
	}
	Calculate();
}

function InclinationChange()
{
	LatitudeChange();
}

function OrbitChange()
{
	var Orbit_Apogee = parseFloat(elOrbit_Apogee.value);
	if (Orbit_Apogee == 0)
	{
	}else
	{
	var Orbit_Perigee = parseFloat(elOrbit_Perigee.value);
	if (Orbit_Apogee < Orbit_Perigee)
	elOrbit_Apogee.value = Orbit_Perigee.toFixed(0);
	}
	Calculate();
}

function RangeMinMax(range, input_field, fuel, cycle, index)
{

	var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
	if(Lift_off_Mass > 460000) Lift_off_Mass = 460000;
	var _3rdStage_Mass = parseFloat(elLift_off_Mass.textContent)/100.*parseFloat(el3rd_Stage_mass_ratio.value);
	var OrbStage_Mass = parseFloat(elLift_off_Mass.textContent)/100.*parseFloat(elOrb_Stage_mass_ratio.value);
	var cycle_corr = 1.;
	if(index < 2)
	{
	cycle_corr = 1.;
	if(cycle == 3) cycle_corr = 1.6;
	var orsc_corr = 0.;
	var ThrustToWeight_corr = 0;
	var Weight_corr = 0.8
	if(cycle == 3 || fuel == 10)Weight_corr = 0.4  //Pressure Fed or Solid
	if(index == 0)ThrustToWeight_corr = Weight_corr*(elThrust_to_weight_ratio.value-1.2);
	if(index == 1)ThrustToWeight_corr = Weight_corr*(elThrust_to_weight_ratio_2nd.value-0.9);

	if(cycle == 0) orsc_corr = 0.5; //Staged Combustion
	if(cycle == 2) orsc_corr = 0.5; //Electric
	if(fuel == 10) {cycle_corr = 1.; orsc_corr = 0.;}
	if(elReusable.checked && index == 0) orsc_corr = orsc_corr + 0.7; //Reusable
	var val_min = (s_fuel_data_min[fuel][index]+orsc_corr+ThrustToWeight_corr)*cycle_corr*Math.pow(Lift_off_Mass/460000,-.085);
	var val_max = (s_fuel_data_max[fuel][index]+orsc_corr+ThrustToWeight_corr)*cycle_corr*Math.pow(Lift_off_Mass/460000,-.085);
	}
	else
	{
	var Reus_corr_ = 0.;
	if(index == 4 && Reusable.checked == true)
	 { 
		Reus_corr_ = Reus_corr;
	 }

	cycle_corr = 1.;
	if(index > 7) cycle_corr = s_cycle_data[cycle][index-8];
	val_min = s_fuel_data_min[fuel][index]*cycle_corr + Reus_corr_;
	val_max = s_fuel_data_max[fuel][index]*cycle_corr + Reus_corr_;
//	For heavy Launchers, the same ratios are used for the upper stage as for the second stage.
	if(index == 2)
	 {
	  var ScaleCoeff = Math.min(1., 10000. / _3rdStage_Mass);
	  val_min = s_fuel_data_min[fuel][index-1] + ScaleCoeff * (s_fuel_data_min[fuel][index] - s_fuel_data_min[fuel][index-1]);
	  val_max = s_fuel_data_max[fuel][index-1] + ScaleCoeff * (s_fuel_data_max[fuel][index] - s_fuel_data_max[fuel][index-1]);
	 }
	if(index == 3)
	 { 
	  ScaleCoeff = Math.min(1., 10000. / OrbStage_Mass);
  	  val_min = s_fuel_data_min[fuel][index-2] + ScaleCoeff * (s_fuel_data_min[fuel][index] - s_fuel_data_min[fuel][index-2]);
	  val_max = s_fuel_data_max[fuel][index-2] + ScaleCoeff * (s_fuel_data_max[fuel][index] - s_fuel_data_max[fuel][index-2]);
	 }
	} 
	
	var input_value = parseFloat(input_field.value);

	if ("min" in range)
		range.min = val_min * 100.;
	else
    range.setAttribute("min", val_min * 100.);
		
	if ("max" in range)
		range.max = val_max * 100.;
	else
    range.setAttribute("max", val_max * 100.);
	if (s_fuel_invert[index])
		range.value = (val_min + val_max - input_value) * 100.;
	else
		range.value = input_value * 100.;
//	    CalculateScore();
}

function updateCycle()
{
	var fuel = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	fuel[8] = elFuel.selectedIndex;
	fuel[9] = elFuel.selectedIndex;
	fuel[10] = elFuel2.selectedIndex;
	fuel[11] = elFuel2.selectedIndex;
	fuel[12] = elFuel3.selectedIndex;
	fuel[13] = elFuelO.selectedIndex;

	var cycle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	cycle[8] = elCycle.selectedIndex;
	cycle[9] = elCycle.selectedIndex;
	cycle[10] = elCycle2.selectedIndex;
	cycle[11] = elCycle2.selectedIndex;
	cycle[12] = elCycle3.selectedIndex;
	cycle[13] = elCycleO.selectedIndex;

	for (var i = 8; i < 14; ++i)
		RangeMinMax(s_slider[i], s_slider_edit[i], fuel[i], cycle[i], i);
	ElectricChange();

}
function updateCycleAndCalc()
{
	updateCycle();
	if (elLimitation.checked)
	{
	    DelLimitation();
	    SetLimitation();
	}
	updateFuel();
	if (elSet_averages.checked) SetAverages(0,13);
	if (elSet_AllMax.checked) SetAllMax();
	if (elSet_AllMin.checked) SetAllMin();
	Calculate();
}

function updateFuel()
{
	var fuel = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	fuel[0] = elFuel.selectedIndex;
	fuel[1] = elFuel2.selectedIndex;
	fuel[2] = elFuel3.selectedIndex;
	fuel[3] = elFuelO.selectedIndex;
	fuel[4] = elFuel.selectedIndex;
	fuel[5] = elFuel2.selectedIndex;
	fuel[6] = elFuel3.selectedIndex;
	fuel[7] = elFuelO.selectedIndex;
	fuel[8] = elFuel.selectedIndex;
	fuel[9] = elFuel.selectedIndex;
	fuel[10] = elFuel2.selectedIndex;
	fuel[11] = elFuel2.selectedIndex;
	fuel[12] = elFuel3.selectedIndex;
	fuel[13] = elFuelO.selectedIndex;

	var cycle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	cycle[0] = elCycle.selectedIndex;
	cycle[1] = elCycle2.selectedIndex;
	cycle[2] = elCycle3.selectedIndex;
	cycle[3] = elCycleO.selectedIndex;
	cycle[4] = elCycle.selectedIndex;
	cycle[5] = elCycle2.selectedIndex;
	cycle[6] = elCycle3.selectedIndex;
	cycle[7] = elCycleO.selectedIndex;
	cycle[8] = elCycle.selectedIndex;
	cycle[9] = elCycle.selectedIndex;
	cycle[10] = elCycle2.selectedIndex;
	cycle[11] = elCycle2.selectedIndex;
	cycle[12] = elCycle3.selectedIndex;
	cycle[13] = elCycleO.selectedIndex;

// 	Staged Combustion and Gas-Gen cycle cannot be used for monopropellant or solid
	for (var i = 0; i < 14; ++i)
	 {
		if (fuel[i] == 8 && cycle[i] < 2) cycle[i] = 3;
		if (fuel[i] == 9 ) cycle[i] = 3;
		if (fuel[i] == 10 ) cycle[i] = 1;
	 }

	elCycle.selectedIndex  = cycle[0]; 
	elCycle2.selectedIndex = cycle[1]; 
	elCycle3.selectedIndex = cycle[2]; 
	elCycleO.selectedIndex = cycle[3]; 
	elCycle.selectedIndex  = cycle[4]; 
	elCycle2.selectedIndex = cycle[5]; 
	elCycle3.selectedIndex = cycle[6]; 
	elCycleO.selectedIndex = cycle[7]; 
	elCycle.selectedIndex  = cycle[8]; 
	elCycle.selectedIndex  = cycle[9]; 
	elCycle2.selectedIndex = cycle[10];
	elCycle2.selectedIndex = cycle[11];
	elCycle3.selectedIndex = cycle[12];
	elCycleO.selectedIndex = cycle[13];

	for (var i = 0; i < 14; ++i)
		RangeMinMax(s_slider[i], s_slider_edit[i], fuel[i], cycle[i], i);
}
function updateFuelAndCalc()
{
	updateFuel();
	if (elRocket.selectedIndex == 0) updateWeight();
	SolidChange();
	if (elLimitation.checked)
	{
	    DelLimitation();
	    SetLimitation();
	}
	if (elSet_averages.checked) SetAverages(0,13);
	if (elSet_AllMax.checked) SetAllMax();
	if (elSet_AllMin.checked) SetAllMin();
	Calculate();
}

function updateStages()
{
//		Abs_Calculation.checked = false;
	var stages = elStages.selectedIndex;
	if (stages == 0) 
		{ 
			elBooster.checked = 0.;
			Second_stage_prop_used_with_booster = 0.;
			el2nd_Stage_mass_ratio.value = 0.;
			el3rd_Stage_mass_ratio.value = 0.;
			elOrb_Stage_mass_ratio.value = 0.;
		}
	if (stages == 1) 
		{ 
			el3rd_Stage_mass_ratio.value = 0.;
			elOrb_Stage_mass_ratio.value = 0.;
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][10]; 
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = 12.;
		}
	if (stages == 2) 
		{
			el3rd_Stage_mass_ratio.value = 0.;
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][10]; 
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = 12.;
			elOrb_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][12]; 
			if ( parseFloat(elOrb_Stage_mass_ratio.value) == 0) elOrb_Stage_mass_ratio.value = 3.;
		}
	if (stages == 3) 
		{
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][10]; 
			if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0) el2nd_Stage_mass_ratio.value = 12.;
			el3rd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][11]; 
			if ( parseFloat(el3rd_Stage_mass_ratio.value) == 0) el3rd_Stage_mass_ratio.value = 4.;
			elOrb_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][12]; 
			if ( parseFloat(elOrb_Stage_mass_ratio.value) == 0) elOrb_Stage_mass_ratio.value = 2.;
		}
	updateWeight_Ratio ();
	if (elRocket.selectedIndex != 0) DelAverages();
	if (elSet_averages.checked) SetAverages(0,13);
	Calculate();
	fStagesChange();
	CalculationError();		
	CalculateScore();
}

function updateEngine1()
{
	var Index = elEngine1.selectedIndex * 2;
	Engine1_Index = Index;
	elFirst_stage_engine_thrust.value = s_engine_data[Index][1];
	elFirst_stage_isp_sea_level.value = s_engine_data[Index][2];
	elFirst_stage_isp_vac.value = s_engine_data[Index][3];
//		elFirst_stage_engines_number.value = s_engine_data[Index][6];
	elFuel.selectedIndex = s_engine_data[Index][4];
	elCycle.selectedIndex = s_engine_data[Index][5];
	if (s_designed_first == true)
	{
		elBooster.checked = 0;
		elFirst_stage_engines_number.value = s_engine_data[Index][6];
		var spacePort = s_engine_data[Index][10];
		elOrbit.selectedIndex = 0;
		for (var i=0; i < s_start_point_count; ++i)
		{
			if ( s_start_point_data[i][0] == spacePort )
			{
				elStartingPoint.selectedIndex = i;
				updateStartingPoint();
				break;
			}
		}
		elEngine2.selectedIndex = Index/2;
		updateEngine2();
		if (s_engine_data[Index][8] == "P") 
		{
			elBooster.checked = true;
			BoosterChange();
		}
	}
	updateWeight();
	updateCycle();
	updateFuel();
	SolidChange();
	SetAverages(0,7);
	if (s_engine_data[Index][9] != "A")elAir_Launch.checked = false; 
	if (s_designed_first == true)
	{
		if (s_engine_data[Index][9] == "A") 
		{
			elAir_Launch.checked = true;
			AirLaunchChange();
			Calculate();
		}
		s_designed_first = false;
	}
}

function updateEngine2()
{
	var Index = (elEngine2.selectedIndex * 2) + 1;
	Engine2_Index = Index;

	elFuel2.selectedIndex = s_engine_data[Index][4];
	if(s_designed_first)
	{
	  elFuelO.selectedIndex = elFuel2.selectedIndex;
	  elFuel3.selectedIndex = elFuel2.selectedIndex;
	}
	elCycle2.selectedIndex = s_engine_data[Index][5];
	if (elBooster.checked)
		elSecond_stage_engine_thrust.value = s_engine_data[Index][1]*elSecond_stage_isp_sea_level.value/elSecond_stage_isp_vac.value;
	else
		elSecond_stage_engine_thrust.value = s_engine_data[Index][1];
	elSecond_stage_isp_sea_level.value = s_engine_data[Index][2];
	elSecond_stage_isp_vac.value = s_engine_data[Index][3];
	if (s_designed_first == true)
		elSecond_stage_engines_number.value = s_engine_data[Index][6];
//		s_designed_first = false;
	updateWeight();
	updateCycle();
	updateFuel();
	SolidChange();
	SetAverages(0,7);
}

function updateWeight()
{
	if(elRocket.selectedIndex == 0)
	{
		var First_stage_engines_number = parseFloat(elFirst_stage_engines_number.value).toFixed(0);
		var Second_stage_engines_number = parseFloat(elSecond_stage_engines_number.value).toFixed(0);
		elFirst_stage_engines_number.value = First_stage_engines_number;
		elSecond_stage_engines_number.value = Second_stage_engines_number;

		elSecond_stage_total_thrust.value = (elSecond_stage_engine_thrust.value*elSecond_stage_engines_number.value ).toFixed(1);
		if (elBooster.checked)
		 {
		  elThrust_to_weight_ratio.value = 1.3;
		  Lift_off_Mass = 1./elThrust_to_weight_ratio.value * (elFirst_stage_engine_thrust.value * First_stage_engines_number + elSecond_stage_engine_thrust.value * Second_stage_engines_number);
		 }
		else
		  Lift_off_Mass = 1./elThrust_to_weight_ratio.value * elFirst_stage_engine_thrust.value * First_stage_engines_number;
		elFirst_stage_total_thrust.value = (elFirst_stage_engine_thrust.value*elFirst_stage_engines_number.value *AirLaunch_Thrust_gain).toFixed(1);

//			Fairing_mass = parseFloat((0.0045*Lift_off_Mass).toFixed(0));
		Assumed_payload_mass = parseFloat((0.025*Lift_off_Mass).toFixed(0));
		Fairing_mass = parseFloat((0.3*Assumed_payload_mass).toFixed(0));
//			Payload_mass = Assumed_payload_mass;
		Rocket_Mass = Lift_off_Mass - Fairing_mass - Assumed_payload_mass;
		elFairing_mass.value = Fairing_mass;
		elAssumed_payload_mass.value = Assumed_payload_mass;
		elRocket_Mass.value = Rocket_Mass.toFixed(0);
//			elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);
		var Den_fuel = s_fuel_data_max[elFuel.selectedIndex][14];
		var Den_fuel2 = s_fuel_data_max[elFuel2.selectedIndex][14];
		if(elBooster.checked) Den_fuel = Den_fuel2;
		Den_fuel = 0.7*Den_fuel + 0.3*Den_fuel2;
		var Max_midsection_D = Den_fuel*Math.pow(Lift_off_Mass/460000.,1/3);
//			if (elFuel.selectedIndex == 2) Max_midsection_D = 6.*Math.pow(Lift_off_Mass/460000.,1/3);
		elMax_midsection_D.value = Max_midsection_D.toFixed(1);
		var SecStage_mass_ratio = 90.909 * elSecond_stage_engine_thrust.value * Second_stage_engines_number / Rocket_Mass;
		var SecStage_mass_ratio2 =  2 * SecStage_mass_ratio;
		if (SecStage_mass_ratio > 30.) SecStage_mass_ratio = 30.;
		if (SecStage_mass_ratio < 12.) SecStage_mass_ratio = 12.;
		if (SecStage_mass_ratio2 < 12.) SecStage_mass_ratio = SecStage_mass_ratio2;
		if (elBooster.checked) SecStage_mass_ratio = SecStage_mass_ratio *1.7;
		el2nd_Stage_mass_ratio.value = SecStage_mass_ratio.toFixed(1);
		Thrust_to_weight_ratio_2nd = Second_stage_engines_number*elSecond_stage_engine_thrust.value/(Rocket_Mass*el2nd_Stage_mass_ratio.value/100.+Fairing_mass+Payload_mass);
		elThrust_to_weight_ratio_2nd.value = Thrust_to_weight_ratio_2nd.toFixed(3);  

		updateFuel();
		SetAverages(0,7);
		SetAverages(12,13);

		RangeMinMax(s_slider[0], s_slider_edit[0], elFuel.selectedIndex, elCycle.selectedIndex, 0);
		RangeMinMax(s_slider[1], s_slider_edit[1], elFuel2.selectedIndex, elCycle2.selectedIndex, 1);
		SetAverages(0,1);
	}
	Calculate();
}

function updateWeight_Rel()
{
	Abs_Calculation.checked = false;
	updateWeight();
}	

function updateWeight_Ratio()
{
	if (parseFloat(elOrb_Stage_mass_ratio.value) > parseFloat(el2nd_Stage_mass_ratio.value) / 2)elOrb_Stage_mass_ratio.value = (el2nd_Stage_mass_ratio.value / 2).toFixed(3);
//		if (parseFloat(el2nd_Stage_mass_ratio.value) == 0) Abs_Calculation.checked = false;
	if (parseFloat(elThrust_to_weight_ratio.value) < 1.05)
	{
          Thrust_to_weight_ratio = 1.05;
	  elThrust_to_weight_ratio.value = 1.05; 
	}
	if (Abs_Calculation.checked)
	  {
		if (elBooster.checked) 
		  Lift_off_Mass = 1./elThrust_to_weight_ratio.value * (parseFloat(elFirst_stage_total_thrust.value) + parseFloat(elSecond_stage_total_thrust.value));
		else
		  Lift_off_Mass = 1./elThrust_to_weight_ratio.value * elFirst_stage_total_thrust.value;
		Fairing_mass = parseFloat(elFairing_mass.value);
		Rocket_Mass = Lift_off_Mass - Fairing_mass - Last_Payload_mass;
		elRocket_Mass.value = Rocket_Mass.toFixed(0);
		Rocket_Mass = parseFloat(elRocket_Mass.value);
		Thrust_to_weight_ratio_2nd = elSecond_stage_total_thrust.value/(Rocket_Mass*el2nd_Stage_mass_ratio.value/100.+Fairing_mass+Last_Payload_mass);
		elThrust_to_weight_ratio_2nd.value = Thrust_to_weight_ratio_2nd.toFixed(3);  
                
		Abs_Calculation.checked = false;
		updateWeight();
		Abs_Calculation.checked = true;
	  }
	Calculate();
	CalculationError();		
	if (Math.abs(elCalculation_Error.textContent) > 5.) Calculate();
//		updateWeight();
}	

function updateWeight_Ratio2()
{
	if (Abs_Calculation.checked)
	  {
		el2nd_Stage_mass_ratio.value = (100.*(elSecond_stage_total_thrust.value / elThrust_to_weight_ratio_2nd.value - parseFloat(elFairing_mass.value) - Payload_mass_calculated) / parseFloat(elRocket_Mass.value)).toFixed(3);
		updateWeight_Ratio();
	  }
	else
	  updateWeight();
}	

function updateWeight_Mass()
{
	if (Abs_Calculation.checked)
	  {
		Rocket_Mass = parseFloat(elRocket_Mass.value);
		Fairing_mass = parseFloat(elFairing_mass.value);
		Lift_off_Mass = Rocket_Mass + Fairing_mass + Last_Payload_mass;
                Thrust_to_weight_ratio = elFirst_stage_total_thrust.value / Lift_off_Mass;
		if (elBooster.checked) Thrust_to_weight_ratio = (parseFloat(elFirst_stage_total_thrust.value) + parseFloat(elSecond_stage_total_thrust.value)) / Lift_off_Mass;
		if (Thrust_to_weight_ratio < 1.05)
			{
			  Thrust_to_weight_ratio = 1.05;
			  Rocket_Mass = elFirst_stage_total_thrust.value / Thrust_to_weight_ratio - Fairing_mass - Last_Payload_mass;
			  elRocket_Mass.value = Rocket_Mass.toFixed(0);
			}
		elThrust_to_weight_ratio.value = Thrust_to_weight_ratio.toFixed(3);
		Thrust_to_weight_ratio_2nd = elSecond_stage_total_thrust.value/(Rocket_Mass*el2nd_Stage_mass_ratio.value/100.+Fairing_mass+Last_Payload_mass);
		elThrust_to_weight_ratio_2nd.value = Thrust_to_weight_ratio_2nd.toFixed(3);  

		Abs_Calculation.checked = false;
		updateWeight();
		Abs_Calculation.checked = true;
	  }
	updateWeight();
}	

function updateSlider(index)
{
	if (s_fuel_invert[index])
	{
		var vmin;
		var vmax;
		if ("min" in s_slider[index])
			vmin = parseFloat(s_slider[index].min);
		else
			vmin = s_slider[index].getAttribute("min");
		
		if ("max" in s_slider[index])
			vmax = parseFloat(s_slider[index].max);
		else
			vmax = s_slider[index].getAttribute("max");
		s_slider_edit[index].value = ((vmin + vmax - s_slider[index].value) / 100.).toFixed(2);
	} else
		s_slider_edit[index].value = s_slider[index].value / 100.;

	if(Abs_Calculation.checked == true)
		updateWeight_Ratio();
	else
		Calculate();

}

function updateSlider0(index)
{
	s_slider_edit[index].value = s_slider[index].value;
	Calculate();
}

function updateSliderEdit(index)
{
	var val_min;
	var val_max;

	if (s_fuel_invert[index])
	{
		if ("min" in s_slider[index])
			val_min = parseFloat(s_slider[index].min);
		else
			val_min = s_slider[index].getAttribute("min");
		
		if ("max" in s_slider[index])
			val_max = parseFloat(s_slider[index].max);
		else
			val_max = s_slider[index].getAttribute("max");
		s_slider[index].value = val_min + val_max - s_slider_edit[index].value * 100.;
	} else
		s_slider[index].value =  s_slider_edit[index].value * 100.;
}

function updateSliderEdit0(index)
{
	s_slider[index].value = s_slider_edit[index].value;
}

function update1st_Dry_to_Wet_mass_ratio_Range()
{
	updateSlider(0);
}

function update2nd_Dry_to_Wet_mass_ratio_Range()
{
	updateSlider(1);
}

function update3rd_Dry_to_Wet_mass_ratio_Range()
{
	updateSlider(2);
}

function updateOrb_Dry_to_Wet_mass_ratio_Range()
{
	updateSlider(3);
}

function updateUnused_propellant_of_1st_Stage_Range()
{
	updateSlider(4);
}

function updateUnused_propellant_of_2nd_Stage_Range()
{
	updateSlider(5);
}

function updateUnused_propellant_of_3rd_Stage_Range()
{
	updateSlider(6);
}

function updateUnused_propellant_of_Transfer_Orbit_Stage_Range()
{
	updateSlider(7);
}

function updateFirst_stage_isp_sea_level_Range()
{
	updateSlider(8);
}

function updateFirst_stage_isp_vac_Range()
{
	updateSlider(9);
}

function updateSecond_stage_isp_sea_level_Range()
{
	updateSlider(10);
}

function updateSecond_stage_isp_vac_Range()
{
	updateSlider(11);
}

function updateThird_stage_isp_Range()
{
	updateSlider(12);
}

function updateTransfer_Orbit_Stage_isp_Range()
{
	updateSlider(13);
}

function updateSpecific_Impulse_Variation_Range()
{
	Abs_Calculation.checked = false;
	var SIV_old = elSpecific_Impulse_Variation.value
	updateSlider0(14);
	Specific_Impulse_Variation_old = elSpecific_Impulse_Variation.value;
	elFirst_stage_isp_sea_level.value =(elFirst_stage_isp_sea_level.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elFirst_stage_isp_vac.value = (elFirst_stage_isp_vac.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elSecond_stage_isp_sea_level.value = (elSecond_stage_isp_sea_level.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elSecond_stage_isp_vac.value = (elSecond_stage_isp_vac.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elThird_stage_isp.value = (elThird_stage_isp.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elTransfer_Orbit_Stage_isp.value = (elTransfer_Orbit_Stage_isp.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	for (var i = 8; i < 14; ++i) updateSliderEdit(i);
	Calculate();
}

function update1st_Dry_to_Wet_mass_ratio()
{
	updateSliderEdit(0);
}

function update2nd_Dry_to_Wet_mass_ratio()
{
	updateSliderEdit(1);
}

function update3rd_Dry_to_Wet_mass_ratio()
{
	updateSliderEdit(2);
}

function updateOrb_Dry_to_Wet_mass_ratio()
{
	updateSliderEdit(3);
}

function updateUnused_propellant_of_1st_Stage()
{
	updateSliderEdit(4);
}

function updateUnused_propellant_of_2nd_Stage()
{
	updateSliderEdit(5);
}

function updateUnused_propellant_of_3rd_Stage()
{
	updateSliderEdit(6);
}

function updateUnused_propellant_of_Transfer_Orbit_Stage()
{
	updateSliderEdit(7);
}

function updateFirst_stage_isp_sea_level()
{
	updateSliderEdit(8);
}

function updateFirst_stage_isp_vac()
{
	updateSliderEdit(9);
}

function updateSecond_stage_isp_sea_level()
{
	updateSliderEdit(10);
}

function updateSecond_stage_isp_vac()
{
	updateSliderEdit(11);
}

function updateThird_stage_isp()
{
	updateSliderEdit(12);
}

function updateTransfer_Orbit_Stage_isp()
{
	updateSliderEdit(13);
}

function updateSpecific_Impulse_Variation()
{
	Abs_Calculation.checked = false;
	var SIV_old = Specific_Impulse_Variation_old;
	Specific_Impulse_Variation_old = elSpecific_Impulse_Variation.value;
	updateSliderEdit0(14);
	elFirst_stage_isp_sea_level.value =(elFirst_stage_isp_sea_level.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elFirst_stage_isp_vac.value = (elFirst_stage_isp_vac.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elSecond_stage_isp_sea_level.value = (elSecond_stage_isp_sea_level.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elSecond_stage_isp_vac.value = (elSecond_stage_isp_vac.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elThird_stage_isp.value = (elThird_stage_isp.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	elTransfer_Orbit_Stage_isp.value = (elTransfer_Orbit_Stage_isp.value*elSpecific_Impulse_Variation.value/SIV_old).toFixed(2);
	for (var i = 8; i < 14; ++i) updateSliderEdit(i);
	Calculate();
}
			
function updateOrbitAndCalc()
{
	elOrbit_Perigee.value ="";
	elOrbit_Apogee.value ="";
	updateOrbit();
	Calculate();
}

function updateRocket()
{
//		elReusable.checked = false;
	Abs_Calculation.checked = false;
	elSet_averages.checked = false;
	elSet_AllMin.checked = false;
	elSet_AllMax.checked = false;
	elOrbit_Perigee.value = "";
	Orbit_Inclination = "";
	Starting_point_Altitude_Old = 0.1;
	elStarting_point_Altitude.value = 0.1;
	elAdditional_Speed.value = 0.;
	AirLaunch_Thrust_gain = 1.;
	if (elRocket.selectedIndex == 0)
	{
		document.getElementById('First_stage_total_thrust').setAttribute('readonly',true);
		document.getElementById('Second_stage_total_thrust').setAttribute('readonly',true);
	} else
	{
		document.getElementById('First_stage_total_thrust').removeAttribute('readonly');
		document.getElementById('Second_stage_total_thrust').removeAttribute('readonly');
	}
	if (elRocket.selectedIndex == 0 && edata == null)
	{ 
		Abs_Calculation.checked = false;
		elLimitation.checked = false;
		elBooster.checked = false;
		BoosterChange(0);
		elEngine1.selectedIndex = 0;
		elEngine2.selectedIndex = 0;
		s_rocket_data[0][11] = 0.;
		s_rocket_data[0][12] = 0.;
		s_designed_first = true;
		updateEngine1();
		s_designed_first = true;
	}
	else
		elLimitation.checked = false;

	if(rdata != null) 
	 {
	  var strs = rdata.split("|");
	  rdata = null;
	  s_rocket_data[s_rocket_count][1] = strs[0];

	  var opt = document.createElement('option');
	  opt.value = s_rocket_data[s_rocket_count][1];
	  opt.innerHTML = s_rocket_data[s_rocket_count][1];
	  opt.title=s_rocket_data[s_rocket_count][40];
	  elRocket.appendChild(opt);

	  elRocket.selectedIndex = s_rocket_count;
	  for (var i = 1; i < 34; i++) s_rocket_data[s_rocket_count][i+1] = strs[i];
	  s_rocket_data[s_rocket_count][35] = s_start_point_data[strs[34]][0];
	  s_rocket_data[s_rocket_count][36] = s_orbit_data[strs[35]][0];
	  elOrbit_Perigee.value = strs[36];
	  Orbit_Inclination = strs[37];
	  s_rocket_data[s_rocket_count][37] = strs[38];
	  s_rocket_data[s_rocket_count][38] = strs[39];
	  s_rocket_data[s_rocket_count][39] = strs[40];
	  s_rocket_count = s_rocket_count +1;
	 }

	if(edata != null) 
	 {
	  var strs = edata.split("|");

//		  s_rocket_data[0][1] = strs[0];
	  elRocket.selectedIndex = 0;
	  for (var i = 1; i < 26; i++) s_rocket_data[0][i+1] = strs[i];
	  for (var i = 30; i < 34; i++) s_rocket_data[0][i+1] = strs[i];
	  s_rocket_data[0][35] = s_start_point_data[strs[34]][0];
	  s_rocket_data[0][36] = s_orbit_data[strs[35]][0];
	  elOrbit_Perigee.value = strs[36];
	  Orbit_Inclination = strs[37];
	  s_rocket_data[0][37] = strs[38];
	  s_rocket_data[0][38] = strs[39];
	  s_rocket_data[0][39] = strs[40];

	  s_designed_first = false;
	  elEngine1.value = s_engine_data[strs[26]][0];
	  updateEngine1();
	  elEngine2.value = s_engine_data[strs[28]][0];
	  updateEngine2();

	  elFirst_stage_engines_number.value = strs[27];
	  elSecond_stage_engines_number.value = strs[29];

	  s_rocket_data[0][27] = elFuel.selectedIndex;
	  s_rocket_data[0][29] = elFuel2.selectedIndex;
	  s_rocket_data[0][28] = elCycle.selectedIndex;
	  s_rocket_data[0][30] = elCycle2.selectedIndex;
	 }

	elThrust_to_weight_ratio.value = s_rocket_data[elRocket.selectedIndex][2];
	if (elRocket.selectedIndex > 0)
	elFirst_stage_total_thrust.value = ((s_rocket_data[elRocket.selectedIndex][4]+s_rocket_data[elRocket.selectedIndex][6]+s_rocket_data[elRocket.selectedIndex][9])*s_rocket_data[elRocket.selectedIndex][2]).toFixed(1);

	elThrust_to_weight_ratio_2nd.value = s_rocket_data[elRocket.selectedIndex][3];
	if (elRocket.selectedIndex > 0)
	elSecond_stage_total_thrust.value =((s_rocket_data[elRocket.selectedIndex][4]*s_rocket_data[elRocket.selectedIndex][10]+s_rocket_data[elRocket.selectedIndex][6]+s_rocket_data[elRocket.selectedIndex][9])*s_rocket_data[elRocket.selectedIndex][3]).toFixed(1); 

	elLift_off_Mass.textContent = s_rocket_data[elRocket.selectedIndex][4] + s_rocket_data[elRocket.selectedIndex][6] + s_rocket_data[elRocket.selectedIndex][9];
	elRocket_Mass.value = s_rocket_data[elRocket.selectedIndex][4];
	elMax_midsection_D.value = s_rocket_data[elRocket.selectedIndex][5];
	elFairing_mass.value = s_rocket_data[elRocket.selectedIndex][6];
	elFairing_jettison_velocity.value = s_rocket_data[elRocket.selectedIndex][7];
	elJettisoned_battery_mass.value = s_rocket_data[elRocket.selectedIndex][8];
	elAssumed_payload_mass.value = s_rocket_data[elRocket.selectedIndex][9];
	Payload_mass = parseFloat(elAssumed_payload_mass.value);
//		var v2nd_Stage_mass_rat = s_rocket_data[elRocket.selectedIndex][10];
//		var vOrb_Stage_mass_rat = s_rocket_data[elRocket.selectedIndex][12];
//		var Fairing = s_rocket_data[elRocket.selectedIndex][6];
	var Payload = s_rocket_data[elRocket.selectedIndex][9]; 
	Last_Payload_mass = Payload; 

	el2nd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][10];
	el3rd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][11];
	elOrb_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][12];

	el1st_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][13];
	el2nd_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][14];
	el3rd_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][15];
	elOrb_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][16];
	elUnused_propellant_of_1st_Stage.value = s_rocket_data[elRocket.selectedIndex][17];
	elUnused_propellant_of_2nd_Stage.value = s_rocket_data[elRocket.selectedIndex][18];
	elUnused_propellant_of_3rd_Stage.value = s_rocket_data[elRocket.selectedIndex][19];
	elUnused_propellant_of_Transfer_Orbit_Stage.value = s_rocket_data[elRocket.selectedIndex][20];

	elSpecific_Impulse_Variation.value = 100.;
	updateSliderEdit0(14);

	if (elRocket.selectedIndex > 0 )
	{
		elFirst_stage_isp_sea_level.value =s_rocket_data[elRocket.selectedIndex][21];
		elFirst_stage_isp_vac.value = s_rocket_data[elRocket.selectedIndex][22];
		elSecond_stage_isp_sea_level.value = s_rocket_data[elRocket.selectedIndex][23];
		elSecond_stage_isp_vac.value = s_rocket_data[elRocket.selectedIndex][24];
	}
		elThird_stage_isp.value = s_rocket_data[elRocket.selectedIndex][25];
		elTransfer_Orbit_Stage_isp.value = s_rocket_data[elRocket.selectedIndex][26];
	
	var spacePort = s_rocket_data[elRocket.selectedIndex][35];
	for (var i=0; i < s_start_point_count; ++i)
	{
		if ( s_start_point_data[i][0] == spacePort )
		{
			elStartingPoint.selectedIndex = i;
			break;
		}
	}
	updateStartingPoint();
	
	var orbit = s_rocket_data[elRocket.selectedIndex][36];
	for (var i=0; i < s_orbit_count; ++i)
	{
		if ( s_orbit_data[i][0] == orbit )
		{
			Orig_Orbit_Index = i;
			elOrbit.selectedIndex = i;
			break;
		}
	}

	if ( i == s_orbit_count)
	{
		if(orbit.slice(0,3).trim() == "SSO")
		{
		elOrbit.selectedIndex = 2;
		elOrbit_Perigee.value = orbit.slice(4,7).trim();
		}
		else
		{
		elOrbit.selectedIndex = 0;
		elOrbit_Perigee.value = orbit.slice(0,5).trim();
		elOrbit_Apogee.value = orbit.slice(6).trim();
//			elOrbit_Inclination.value = s_start_point_data[elStartingPoint.selectedIndex][4];
		}
	}
	updateOrbit();
	if (Orbit_Inclination != "")elOrbit_Inclination.value = Orbit_Inclination;
	
	elFuel.selectedIndex = s_rocket_data[elRocket.selectedIndex][27];
	elFuel2.selectedIndex = s_rocket_data[elRocket.selectedIndex][29];
	elFuel3.selectedIndex = s_rocket_data[elRocket.selectedIndex][31];
	elFuelO.selectedIndex = s_rocket_data[elRocket.selectedIndex][33];
	elCycle.selectedIndex = s_rocket_data[elRocket.selectedIndex][28];
	elCycle2.selectedIndex = s_rocket_data[elRocket.selectedIndex][30];
	elCycle3.selectedIndex = s_rocket_data[elRocket.selectedIndex][32];
	elCycleO.selectedIndex = s_rocket_data[elRocket.selectedIndex][34];

	updateFuel();
	SolidChange();
	updateCycle();

	if (elLimitation.checked) SetLimitation();
//		elAir_Launch.checked = s_rocket_data[elRocket.selectedIndex][37] != 0;
//		AirLaunchChange();

	elRocketDescription.textContent = s_rocket_data[elRocket.selectedIndex][40];

	elStages.selectedIndex = 3;
	if ( parseFloat(el3rd_Stage_mass_ratio.value) == 0 ) elStages.selectedIndex = 2;
	if ( parseFloat(elOrb_Stage_mass_ratio.value) == 0 ) elStages.selectedIndex = 1;
	if ( parseFloat(el2nd_Stage_mass_ratio.value) == 0 ) elStages.selectedIndex = 0;
	fStagesChange();

	elBooster.checked = s_rocket_data[elRocket.selectedIndex][39] != 0;
	BoosterChange(0);
	if (elRocket.selectedIndex == 0)
	{
		for (var i = 0; i < elProjecting.length; i++)
			elProjecting[i].removeAttribute("style");
		for (var i = 0; i < elProjectingH.length; i++)
			elProjectingH[i].style.display = "none";
		elSecond_stage_isp_sea_level.value = strs[22];
		elSecond_stage_isp_vac.value = strs[23];
		SetAverages(0,7);
		updateWeight();
	} else
	{
		for (var i = 0; i < elProjecting.length; i++)
			elProjecting[i].style.display = "none";
		for (var i = 0; i < elProjectingH.length; i++)
			elProjectingH[i].removeAttribute("style");
		DelAverages();
	}

	elAir_Launch.checked = s_rocket_data[elRocket.selectedIndex][37] != 0;
	AirLaunchChange();

	elReusable.checked = s_rocket_data[elRocket.selectedIndex][38] != 0;
	ReusabilityChange(0);
	edata = null;
}

function updateRocketAndCalc()
{
//		var myURL = new URL(location.href);
//		myURL.searchParams.set('rocket', s_rocket_data[elRocket.selectedIndex][0]);
//		window.location.search = "?rocket=" + s_rocket_data[elRocket.selectedIndex][0]; // page should reload
//		myUrl.reload;

	var myURL = window.location.protocol + "//" + window.location.host + window.location.pathname + "?rocket=" + s_rocket_data[elRocket.selectedIndex][0];
	window.history.pushState({path:myURL},'',myURL);
//		window.history.replaceState ('','',myURL);

	updateRocket();
	Calculate();
	if (elRocket.selectedIndex > 0)Abs_Calculation.checked = true;
}

function ResetInitPayload(Checked)
{
	elResetInit.checked = false;
	elAssumed_payload_mass.value = Payload_mass_calculated.toFixed(1);
	elPayload_change.textContent = "100.0";
	elLast_Payload_change.textContent = "0.0";
}

function ExpandChange()
{

	if (elExpand.getAttribute("isbool") == 0)
	{
		elExpand.setAttribute('isBool',1);
		elExpand.innerHTML = "Show Less";
		elExpand.title = "Display less information";
	} else
	{
		elExpand.setAttribute('isBool',0);
		elExpand.innerHTML = "Advanced...";
		elExpand.title = "Display more information";
	}

        fStagesChange();
}

function ExportRocket()
{
	Export_count = 1 - Export_count;
	var rname ="New_Rocket";
	if (Export_count == 0)rname ="new_Rocket";
	var rdata = "?rdata=" + rname;
	if(elRocket.selectedIndex == 0)rdata = "?edata=" + rname;
	rdata = rdata + "|"+ elThrust_to_weight_ratio.value;
	rdata = rdata + "|"+ elThrust_to_weight_ratio_2nd.value;
	rdata = rdata + "|"+ elRocket_Mass.value;
	rdata = rdata + "|"+ elMax_midsection_D.value;
	rdata = rdata + "|"+ elFairing_mass.value;
	rdata = rdata + "|"+ elFairing_jettison_velocity.value;
	rdata = rdata + "|"+ elJettisoned_battery_mass.value;
	rdata = rdata + "|"+ elAssumed_payload_mass.value;
	rdata = rdata + "|"+ el2nd_Stage_mass_ratio.value;
	rdata = rdata + "|"+ el3rd_Stage_mass_ratio.value;
	rdata = rdata + "|"+ elOrb_Stage_mass_ratio.value;
	rdata = rdata + "|"+ el1st_Dry_to_Wet_mass_ratio.value;
	rdata = rdata + "|"+ el2nd_Dry_to_Wet_mass_ratio.value;
	rdata = rdata + "|"+ el3rd_Dry_to_Wet_mass_ratio.value;
	rdata = rdata + "|"+ elOrb_Dry_to_Wet_mass_ratio.value;
        if(Reusable.checked)rdata = rdata + "|"+ s_rocket_data[0][17];
	else rdata = rdata + "|"+ elUnused_propellant_of_1st_Stage.value;
	rdata = rdata + "|"+ elUnused_propellant_of_2nd_Stage.value;
	rdata = rdata + "|"+ elUnused_propellant_of_3rd_Stage.value;
	rdata = rdata + "|"+ elUnused_propellant_of_Transfer_Orbit_Stage.value;
	rdata = rdata + "|"+ elFirst_stage_isp_sea_level.value;
	rdata = rdata + "|"+ elFirst_stage_isp_vac.value;
	rdata = rdata + "|"+ elSecond_stage_isp_sea_level.value;
	rdata = rdata + "|"+ elSecond_stage_isp_vac.value;
	rdata = rdata + "|"+ elThird_stage_isp.value;
	rdata = rdata + "|"+ elTransfer_Orbit_Stage_isp.value;

	if(elRocket.selectedIndex == 0) rdata = rdata + "|"+ Engine1_Index;
	else 	rdata = rdata + "|"+ elFuel.selectedIndex.toFixed(0);

	if(elRocket.selectedIndex == 0) rdata = rdata + "|"+ elFirst_stage_engines_number.value;
	else	rdata = rdata + "|"+ elCycle.selectedIndex.toFixed(0);

	if(elRocket.selectedIndex == 0) rdata = rdata + "|"+ Engine2_Index;
	else	rdata = rdata + "|"+ elFuel2.selectedIndex.toFixed(0);

	if(elRocket.selectedIndex == 0) rdata = rdata + "|"+ elSecond_stage_engines_number.value;
	else	rdata = rdata + "|"+ elCycle2.selectedIndex.toFixed(0);

	rdata = rdata + "|"+ elFuel3.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ elCycle3.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ elFuelO.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ elCycleO.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ elStartingPoint.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ elOrbit.selectedIndex.toFixed(0);
	rdata = rdata + "|"+ parseFloat(elOrbit_Perigee.value).toFixed(0);
	rdata = rdata + "|"+ parseFloat(elOrbit_Inclination.value).toFixed(1);
	var l = 0; if (elAir_Launch.checked) l = 1;
	rdata = rdata + "|"+ l;
	l = 0; if (elReusable.checked) l = 1;
	rdata = rdata + "|"+ l;
	l = 0; if (elBooster.checked) l = 1;
	rdata = rdata + "|"+ l;

//		var myURL = new URL(location.href);
//		myURL.searchParams.set('rdata', rdata);
//		window.location.search = "?rdata=" + rdata; // page should reload

	var myURL = window.location.protocol + "//" + window.location.host + window.location.pathname + rdata;
	window.history.pushState({path:myURL},'',myURL);
//		window.history.replaceState ('','',myURL);
}

function fStagesChange()
{
	var stages = elStages.selectedIndex;

	if (stages > 0) for (var i = 0; i < els2stages.length; i++) els2stages[i].removeAttribute("style");
	else            for (var i = 0; i < els2stages.length; i++) els2stages[i].style.display = "none";

	if (stages > 1) for (var i = 0; i < els3stages.length; i++) els3stages[i].removeAttribute("style");
	else            for (var i = 0; i < els3stages.length; i++) els3stages[i].style.display = "none";

	if (stages > 2) for (var i = 0; i < els4stages.length; i++) els4stages[i].removeAttribute("style");
	else            for (var i = 0; i < els4stages.length; i++) els4stages[i].style.display = "none";

	if (elExpand.getAttribute("isbool") == 1)
	{
		for (var i = 0; i < elsExpanding.length; i++) elsExpanding[i].removeAttribute("style");

		if(parseFloat(elJettisoned_battery_mass.value) > 0)
		for (var i = 0; i < elsExpandingB.length; i++) elsExpandingB[i].removeAttribute("style");

		if(elStages.selectedIndex > 0)
		  for (var i = 0; i < elsExpanding2.length; i++) elsExpanding2[i].removeAttribute("style");
		else
		  for (var i = 0; i < elsExpanding2.length; i++) elsExpanding2[i].style.display = "none";

		if(elStages.selectedIndex > 1)
		  for (var i = 0; i < elsExpanding3.length; i++) elsExpanding3[i].removeAttribute("style");
		else 
		  for (var i = 0; i < elsExpanding3.length; i++) elsExpanding3[i].style.display = "none";

		if(elStages.selectedIndex > 2)
		  for (var i = 0; i < elsExpanding4.length; i++) elsExpanding4[i].removeAttribute("style");
		else
		  for (var i = 0; i < elsExpanding4.length; i++) elsExpanding4[i].style.display = "none";

	} else
	{
		for (var i = 0; i < elsExpanding.length; i++) elsExpanding[i].style.display = "none";

		for (var i = 0; i < elsExpandingB.length; i++) elsExpandingB[i].style.display = "none";

		for (var i = 0; i < elsExpanding2.length; i++) elsExpanding2[i].style.display = "none";

		for (var i = 0; i < elsExpanding3.length; i++) elsExpanding3[i].style.display = "none";

		for (var i = 0; i < elsExpanding4.length; i++) elsExpanding4[i].style.display = "none";
	}

}

function SolidChange()
{
	if (elFuel.selectedIndex == 10)
	{
		document.getElementById("Cycle").style.visibility='hidden';
	} else
	{
		document.getElementById("Cycle").style.visibility='visible';
	}

	if (elFuel2.selectedIndex == 10)
	{
		document.getElementById("Cycle2").style.visibility='hidden';
	} else
	{
		document.getElementById("Cycle2").style.visibility='visible';
	}

	if (elFuel3.selectedIndex == 10)
	{
		document.getElementById("Cycle3").style.visibility='hidden';
	} else
	{
		document.getElementById("Cycle3").style.visibility='visible';
	}

	if (elFuelO.selectedIndex == 10)
	{
			document.getElementById("CycleO").style.visibility='hidden';
		} else
		{
			document.getElementById("CycleO").style.visibility='visible';
	}

}

function ElectricChange()
{
	if (elCycle2.selectedIndex == 2)
	{
		for (var i = 0; i < elsElectric.length; i++)
			elsElectric[i].removeAttribute("style");

	} else
	{
		for (var i = 0; i < elsElectric.length; i++)
			{
			elJettisoned_battery_mass.value = 0.;
			elsElectric[i].style.display = "none";
			}
	}

}

function ReusabilityChange(Checked)
{
	if (elFuel.selectedIndex == 10)Reusable.checked = false;
	var fuel = elFuel.selectedIndex;
	if (Reusable.checked == false)
	 {
	   if (elSet_averages.checked)
//		     elUnused_propellant_of_1st_Stage.value = 2.0;
	     elUnused_propellant_of_1st_Stage.value = 0.5 * (s_fuel_data_min[fuel][4] + s_fuel_data_max[fuel][4]);
	   else
	     elUnused_propellant_of_1st_Stage.value = s_rocket_data[elRocket.selectedIndex][17];
	 }
	else
         elUnused_propellant_of_1st_Stage.value = (parseFloat(s_rocket_data[elRocket.selectedIndex][17])+Reus_corr).toFixed(2);

	RangeMinMax(s_slider[0], s_slider_edit[0], elFuel.selectedIndex, elCycle.selectedIndex, 0);
	RangeMinMax(s_slider[4], s_slider_edit[4], elFuel.selectedIndex, elCycle.selectedIndex, 4);
	if (elSet_averages.checked)SetAverages(0,0);

	Calculate();
}

function Abs_CalculationChange(Checked)
{
	if (elRocket.selectedIndex == 0) Abs_Calculation.checked = false; 
}

function BoosterChange(Checked)
{
	if (elStages.selectedIndex == 0) elBooster.checked = 0;
	if (elBooster.checked)
	{
		for (var i = 0; i < elsBooster.length; i++)
			elsBooster[i].removeAttribute("style");

		if(elRocket.selectedIndex == 0)
		{
//			s_designed_first = false;
//			while (elEngine2.firstChild) {elEngine2.removeChild(elEngine2.firstChild);}
//			for (var i = 0; i<s_engine_count; i=i+2)
//			{
//				var opt = document.createElement('option');
//				opt.value = s_engine_data[i][0];
//				opt.innerHTML = s_engine_data[i][0];
//				opt.title=s_engine_data[i][11];
//				elEngine2.appendChild(opt);
//			}
//			elEngine2.selectedIndex = elEngine1.selectedIndex;
		updateEngine2();
		}
	} else
	{
			for (var i = 0; i < elsBooster.length; i++)
				elsBooster[i].style.display = "none";

		if(elRocket.selectedIndex == 0)
		{
//			while (elEngine2.firstChild) {elEngine2.removeChild(elEngine2.firstChild);}
//			for (var i = 1; i<s_engine_count; i=i+2)
//			{
//				var opt = document.createElement('option');
//				opt.value = s_engine_data[i][0];
//				opt.innerHTML = s_engine_data[i][0];
//				opt.title=s_engine_data[i][11];
//				elEngine2.appendChild(opt);
//			}
//			elEngine2.selectedIndex = elEngine1.selectedIndex;
		updateEngine2();
//			s_designed_first = true;
		}
	}

	if (elBooster.checked && edata == null)
		{
		  var Second_stage_propellant_mass = parseFloat(elSecond_stage_propellant_mass.value);
		  var Unused_propellant_of_2nd_Stage = parseFloat(elUnused_propellant_of_2nd_Stage.value)
		  var Second_stage_run_time_ = Second_stage_run_time;
		  if (First_stage_run_time > Second_stage_run_time) Second_stage_run_time_ = First_stage_run_time;
		  Second_stage_prop_used_with_booster = (Second_stage_propellant_mass/100.*(100.-Unused_propellant_of_2nd_Stage))*(1. - (Second_stage_run_time_ - First_stage_run_time -5.)/Second_stage_run_time);
		  if (elRocket.selectedIndex > 0) elSecond_stage_total_thrust.value = (parseFloat(elSecond_stage_total_thrust.value) / parseFloat(elSecond_stage_isp_vac.value) * parseFloat(elSecond_stage_isp_sea_level.value)).toFixed(1);
		}
		else 
		{
		  Second_stage_prop_used_with_booster = 0.;
		  if (elRocket.selectedIndex > 0) elSecond_stage_total_thrust.value = (parseFloat(elSecond_stage_total_thrust.value) / parseFloat(elSecond_stage_isp_sea_level.value) * parseFloat(elSecond_stage_isp_vac.value)).toFixed(1);
		}
	Calculate();
	updateWeight();
}

function AirLaunchChange()
{
	if (elAir_Launch.checked)
	{
		elLimitation.checked = false;

//			var Starting_point_Altitude_Old = parseFloat(elStarting_point_Altitude.value);
		var Starting_point_Pressure_Old = (Math.exp(-Starting_point_Altitude_Old/7.16));

		Starting_point_Altitude = elStarting_point_Altitude.value;
		if (Starting_point_Altitude < 1.)
		{
		  Starting_point_Altitude = 12;
		  elStarting_point_Altitude.value = Starting_point_Altitude;
		  elAdditional_Speed.value = 250;
		}
		if(Abs_Calculation.checked || elRocket.selectedIndex == 0)
		{
//			if(elAir_Launch.checked)
//			{
		 var Starting_point_Pressure=(Math.exp(-Starting_point_Altitude/7.16));
		 var First_stage_isp_sea_level = parseFloat(elFirst_stage_isp_sea_level.value);
		 var First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
		 var First_stage_isp_sea_level_ = First_stage_isp_sea_level;
		 First_stage_isp_sea_level = First_stage_isp_vac - (First_stage_isp_vac - First_stage_isp_sea_level)/Starting_point_Pressure_Old * Starting_point_Pressure;
		 elFirst_stage_isp_sea_level.value = First_stage_isp_sea_level.toFixed(2);
                 AirLaunch_Thrust_gain = First_stage_isp_sea_level/First_stage_isp_sea_level_;
		 var First_stage_total_thrust = parseFloat(elFirst_stage_total_thrust.value);
		 elFirst_stage_total_thrust.value = (First_stage_total_thrust/First_stage_isp_sea_level_*First_stage_isp_sea_level).toFixed(3);

//			}
		}
	Starting_point_Altitude_Old = parseFloat(elStarting_point_Altitude.value);
	} 
	else
	{
		Starting_point_Pressure_Old = (Math.exp(-Starting_point_Altitude_Old/7.16));
		Starting_point_Altitude = s_start_point_data[elStartingPoint.selectedIndex][3];
		elStarting_point_Altitude.value = Starting_point_Altitude;
		elAdditional_Speed.value = 0.;
		AirLaunch_Thrust_gain = 1.;
		Starting_point_Altitude_Old = parseFloat(elStarting_point_Altitude.value);

		if(Abs_Calculation.checked || elRocket.selectedIndex == 0)
		{
		Starting_point_Pressure=(Math.exp(-Starting_point_Altitude/7.16));
		First_stage_isp_sea_level = parseFloat(elFirst_stage_isp_sea_level.value);
		First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
		First_stage_isp_sea_level_ = First_stage_isp_sea_level;
		First_stage_isp_sea_level = First_stage_isp_vac - (First_stage_isp_vac - First_stage_isp_sea_level)/Starting_point_Pressure_Old * Starting_point_Pressure;
		elFirst_stage_isp_sea_level.value = First_stage_isp_sea_level.toFixed(1);
		First_stage_total_thrust = parseFloat(elFirst_stage_total_thrust.value);
		elFirst_stage_total_thrust.value = (First_stage_total_thrust/First_stage_isp_sea_level_*First_stage_isp_sea_level).toFixed(3);
		}
	}
	if (elRocket.selectedIndex == 0) elFirst_stage_engine_thrust.value = elFirst_stage_total_thrust.value / elFirst_stage_engines_number.value;
	if (elRocket.selectedIndex == 0) Calculate();
}

function AirLaunchChangeAndCalc()
{
	AirLaunchChange();
	Calculate();
}

function StrtPointAlt_Change()
{
	var Space_Port_Altitude = s_start_point_data[elStartingPoint.selectedIndex][3];
	if (elStarting_point_Altitude.value < Space_Port_Altitude) elStarting_point_Altitude.value = Space_Port_Altitude;
	var Starting_point_Altitude = elStarting_point_Altitude.value;
	var Additional_Speed = elAdditional_Speed.value;
	  if(elAir_Launch.checked)
		{
		  elAir_Launch.checked = false;
		  AirLaunchChangeAndCalc();
		}
	elStarting_point_Altitude.value = Starting_point_Altitude;

	if (Starting_point_Altitude > 1.)
	{
	  elAdditional_Speed.value = Additional_Speed;
	  elAir_Launch.checked = true;
	  AirLaunchChangeAndCalc();
	}
	else
	Calculate();
}

function LimitationChange()
{
	if (elLimitation.checked)
	{
	    Abs_Calculation.checked = false;
	    SetLimitation();
	    updateFuel();
	    Calculate();
	}
	else
	{
	    DelLimitation();
	    elSpecific_Impulse_Variation.value = 100.;
	    updateSliderEdit0(14);
	    updateFuel();
	    Calculate();
	}
}

function SetLimitation()
{
	var fuel = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	fuel[0] = elFuel.selectedIndex;
	fuel[1] = elFuel2.selectedIndex;
	fuel[2] = elFuel3.selectedIndex;
	fuel[3] = elFuelO.selectedIndex;
	fuel[4] = elFuel.selectedIndex;
	fuel[5] = elFuel2.selectedIndex;
	fuel[6] = elFuel3.selectedIndex;
	fuel[7] = elFuelO.selectedIndex;
	fuel[8] = elFuel.selectedIndex;
	fuel[9] = elFuel.selectedIndex;
	fuel[10] = elFuel2.selectedIndex;
	fuel[11] = elFuel2.selectedIndex;
	fuel[12] = elFuel3.selectedIndex;
	fuel[13] = elFuelO.selectedIndex;

	var cycle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	cycle[0] = elCycle.selectedIndex;
	cycle[1] = elCycle2.selectedIndex;
	cycle[2] = elCycle3.selectedIndex;
	cycle[3] = elCycleO.selectedIndex;
	cycle[4] = elCycle.selectedIndex;
	cycle[5] = elCycle2.selectedIndex;
	cycle[6] = elCycle3.selectedIndex;
	cycle[7] = elCycleO.selectedIndex;
	cycle[8] = elCycle.selectedIndex;
	cycle[9] = elCycle.selectedIndex;
	cycle[10] = elCycle2.selectedIndex;
	cycle[11] = elCycle2.selectedIndex;
	cycle[12] = elCycle3.selectedIndex;
	cycle[13] = elCycleO.selectedIndex;

//		for (var i = 0; i < 14; ++i)
//			RangeMinMax(s_slider[i], s_slider_edit[i], fuel[i], cycle[i], i);

	for (var i = 0; i < 14; ++i)
	{
		var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
//			if(Lift_off_Mass > 460000) Lift_off_Mass = 460000;
		var cycle_corr = 1.;
		if(i < 2)
		{
		cycle_corr = 1.;
		if(cycle[i] == 3) cycle_corr = 1.6;
		var orsc_corr = 0.;
		var ThrustToWeight_corr = 0;
		var Weight_corr = 0.8
		if(cycle == 3 || fuel == 10)Weight_corr = 0.4  //Pressure Fed or Solid
		if(i == 0)ThrustToWeight_corr = Weight_corr*(elThrust_to_weight_ratio.value-1.2);
		if(i == 1)ThrustToWeight_corr = Weight_corr*(elThrust_to_weight_ratio_2nd.value-1.1);

		if(cycle[i] == 0) orsc_corr = .5; //Staged Combustion
		if(cycle[i] == 2) orsc_corr = .5; //Electric
		if(fuel[i] == 10) {cycle_corr = 1.; orsc_corr = 0.;}  //Solid
		if(elReusable.checked && i == 0) orsc_corr = orsc_corr + 0.7; //Reusable
		var val_min = (s_fuel_data_min[fuel[i]][i]+orsc_corr+ThrustToWeight_corr)*cycle_corr*Math.pow(Lift_off_Mass/460000,-.085);
		var val_max = (s_fuel_data_max[fuel[i]][i]+orsc_corr+ThrustToWeight_corr)*cycle_corr*Math.pow(Lift_off_Mass/460000,-.085);
		}
		else
		{
		var Reus_corr_ = 0.;
		if(i == 4 && Reusable.checked == true)
		 { 
			Reus_corr_ = Reus_corr;
		 }

		cycle_corr = 1.;
		if(i > 7) cycle_corr = s_cycle_data[cycle[i]][i-8];
		var val_min = s_fuel_data_min[fuel[i]][i]*cycle_corr + Reus_corr_;
		var val_max = s_fuel_data_max[fuel[i]][i]*cycle_corr + Reus_corr_;
		}
//	For heavy Launchers, the same ratios are used for the upper stage as for the second stage.
//			if(i == 2)
//			 {
//			  var ScaleCoeff = Math.min(1., 10000. / _3rdStage_Mass);
//			  val_min = s_fuel_data_min[fuel[i]][i-1] + ScaleCoeff * (s_fuel_data_min[fuel[i]][i] - s_fuel_data_min[fuel[i]][i-1]);
//			  val_max = s_fuel_data_max[fuel[i]][i-1] + ScaleCoeff * (s_fuel_data_max[fuel[i]][i] - s_fuel_data_max[fuel[i]][i-1]);
//			 }
//			if(i == 3)
//			 { 
//			  ScaleCoeff = Math.min(1., 10000. / OrbStage_Mass);
//		  	  val_min = s_fuel_data_min[fuel[i]][i-2] + ScaleCoeff * (s_fuel_data_min[fuel[i]][i] - s_fuel_data_min[fuel[i]][i-2]);
//			  val_max = s_fuel_data_max[fuel[i]][i-2] + ScaleCoeff * (s_fuel_data_max[fuel[i]][i] - s_fuel_data_max[fuel[i]][i-2]);
//			 }
////			} 

		
		var input_value = parseFloat(s_slider_edit[i].value);
		if (s_fuel_invert[i] == 1)
		  {if (input_value < val_min)
			s_slider_edit[i].value = val_min.toFixed(3);
		  }
		  else
		  {if (input_value > val_max)
			s_slider_edit[i].value = val_max.toFixed(3);
		  }
	}


}

function DelLimitation()
{
	if (elSet_averages.checked)
	{
		Set_averagesChange(); // TJM - Restore average values if 'Set averages' checked
	} else
	{
	s_slider_edit[0].value = s_rocket_data[elRocket.selectedIndex][13];
	s_slider_edit[1].value = s_rocket_data[elRocket.selectedIndex][14];
	s_slider_edit[2].value = s_rocket_data[elRocket.selectedIndex][15];
	s_slider_edit[3].value = s_rocket_data[elRocket.selectedIndex][16];
	s_slider_edit[4].value = s_rocket_data[elRocket.selectedIndex][17];
	s_slider_edit[5].value = s_rocket_data[elRocket.selectedIndex][18];
	s_slider_edit[6].value = s_rocket_data[elRocket.selectedIndex][19];
	s_slider_edit[7].value = s_rocket_data[elRocket.selectedIndex][20];
	s_slider_edit[8].value = s_rocket_data[elRocket.selectedIndex][21];
	s_slider_edit[9].value = s_rocket_data[elRocket.selectedIndex][22];
	s_slider_edit[10].value = s_rocket_data[elRocket.selectedIndex][23];
	s_slider_edit[11].value = s_rocket_data[elRocket.selectedIndex][24];
	s_slider_edit[12].value = s_rocket_data[elRocket.selectedIndex][25];
	s_slider_edit[13].value = s_rocket_data[elRocket.selectedIndex][26];
	}
}

function Set_averagesChange()
{
	if (elSet_averages.checked)
	{
	Abs_Calculation.checked = false;
	elSet_AllMin.checked = false;
	elSet_AllMax.checked = false;
	SetAverages(0,13);
	Calculate();
	}
	else
	 DelAverages();
}

function SetAverages(Istr,Ifin)
{
	if(edata == null)
	{
	  for (var i = Istr; i < Ifin+1; ++i)
		{
		s_slider[i].value = 0.5*(parseFloat(s_slider[i].max)+parseFloat(s_slider[i].min));
		updateSlider(i);
		}
	  elSpecific_Impulse_Variation.value = 100.;
	  updateSliderEdit0(14);
	}
}

function DelAverages()
{
	if (elRocket.selectedIndex > 0)
	  { 
	    DelLimitation();
	    LimitationChange();
	    if(elReusable.checked) ReusabilityChange(0);
	  }
	else
	  {
	    s_designed_first = false;
	    updateEngine2();
	    updateEngine1();
	  }
}

function Set_AllMinChange()
{
	if (elSet_AllMin.checked)
	{
	Abs_Calculation.checked = false;
	elSet_averages.checked = false;
	elSet_AllMax.checked = false;
	SetAllMin();
	Calculate();
	}
	else
	 DelAverages();
}

function SetAllMin()
{
	for (var i = 0; i < 14; ++i)
		{
		s_slider[i].value = parseFloat(s_slider[i].min);
		updateSlider(i);
		}
	elSpecific_Impulse_Variation.value = 100.;
	updateSliderEdit0(14);
}

function Set_AllMaxChange()
{
	if (elSet_AllMax.checked)
	{
	Abs_Calculation.checked = false;
	elSet_averages.checked = false;
	elSet_AllMin.checked = false;
	SetAllMax();
	Calculate();
	}
	else
	 DelAverages();
}

function SetAllMax()
{
	for (var i = 0; i < 14; ++i)
		{
		s_slider[i].value = parseFloat(s_slider[i].max);
		updateSlider(i);
		}
	elSpecific_Impulse_Variation.value = 100.;
	updateSliderEdit0(14);
}

function CalculateScore()
{
	Aggressivity = 1.;
	if(elAir_Launch.checked) Aggressivity = Aggressivity + 1.;
	if(elReusable.checked) Aggressivity = Aggressivity + 1.;
	// if Pressure Fed
	if(elCycle.selectedIndex == 3) Aggressivity = Aggressivity - 1.25*0.5;
	if(elStages.selectedIndex > 0 & elCycle2.selectedIndex == 3) Aggressivity = Aggressivity - 1.25*0.5;
	if(elStages.selectedIndex > 1 & elCycleO.selectedIndex == 3) Aggressivity = Aggressivity - 0.5*0.5;
	if(elStages.selectedIndex > 2 & elCycle3.selectedIndex == 3) Aggressivity = Aggressivity - 0.5*0.5;
	// if Lox/Methane
	if(elFuel.selectedIndex == 1) Aggressivity = Aggressivity + 1.25*0.3;
	if(elStages.selectedIndex > 0 & elFuel2.selectedIndex == 1) Aggressivity = Aggressivity + 1.25*0.3;
	if(elStages.selectedIndex > 1 & elFuelO.selectedIndex == 1) Aggressivity = Aggressivity + 0.5*0.3;
	if(elStages.selectedIndex > 2 & elFuel3.selectedIndex == 1) Aggressivity = Aggressivity + 0.5*0.3;
	// if Lox/LH2
	if(elFuel.selectedIndex == 2) Aggressivity = Aggressivity + 1.25*0.8;
	if(elStages.selectedIndex > 0 & elFuel2.selectedIndex == 2) Aggressivity = Aggressivity + 1.25*0.8;
	if(elStages.selectedIndex > 1 & elFuelO.selectedIndex == 2) Aggressivity = Aggressivity + 0.5*0.8;
	if(elStages.selectedIndex > 2 & elFuel3.selectedIndex == 2) Aggressivity = Aggressivity + 0.5*0.8;

	var StageIndex = elStages.selectedIndex;
	for (var i = 0; i < 8; ++i)
		{
		if (parseFloat(s_slider[i].max) > 0.) Aggressivity = Aggressivity + ScoreCalcWeight[StageIndex][i]*Math.pow(Math.max(1e-3,1.-(parseFloat(s_slider_edit[i].value)*100.-parseFloat(s_slider[i].min))/(parseFloat(s_slider[i].max)-parseFloat(s_slider[i].min))), 1.5);
		if (i < 4 & parseFloat(s_slider_edit[i].value)*100. < parseFloat(s_slider[i].min)) Aggressivity = Aggressivity + ScoreCalcWeight[StageIndex][i]*(Math.pow(1.+(-parseFloat(s_slider_edit[i].value)*100.+parseFloat(s_slider[i].min))/(parseFloat(s_slider[i].max)-parseFloat(s_slider[i].min)), 3.0)-1.);
		if (i < 4 & parseFloat(s_slider_edit[i].value) == 0.) Aggressivity = 1/0;
		}
//		var i_end = 14;
	var i_end = 10 + elStages.selectedIndex * 2;
	if (elStages.selectedIndex > 2) i_end = 14;
	for (var i = 8; i < i_end; ++i)
		{
//			if (i == 0) Aggressivity = 0;
		Aggressivity = Aggressivity + ScoreCalcWeight[StageIndex][i]*Math.pow(Math.max(1e-3,(parseFloat(s_slider_edit[i].value)*100.*parseFloat(s_slider_edit[14].value)/100.-parseFloat(s_slider[i].min))/(parseFloat(s_slider[i].max)-parseFloat(s_slider[i].min))), 1.5);
		if (parseFloat(s_slider_edit[i].value)*100. > parseFloat(s_slider[i].max)) Aggressivity = Aggressivity + ScoreCalcWeight[StageIndex][i]*(Math.pow(1.+(parseFloat(s_slider_edit[i].value)*parseFloat(s_slider_edit[14].value)-parseFloat(s_slider[i].max))/(parseFloat(s_slider[i].max)-parseFloat(s_slider[i].min)),3.0)-1.);
		}
	if (Aggressivity < 0)Aggressivity = 0.;
	elAggressivity.textContent = Aggressivity.toFixed(1);

	if (Aggressivity <= 12)
	{
		for (var i = 0; i < elTooHighAggressivity.length; i++)
			elTooHighAggressivity[i].style.color = "black";
	} else
	{
		for (var i = 0; i < elTooHighAggressivity.length; i++)
			elTooHighAggressivity[i].style.color = "red";
	}

}

function MassRecalculate()
{
	Abs_Calculation.checked = true;
//		elLimitation.checked = false;

	First_stage_propellant_mass = parseFloat(elFirst_stage_propellant_mass.value);
	First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
	First_stage_total_thrust = parseFloat(elFirst_stage_total_thrust.value);
	Second_stage_propellant_mass = parseFloat(elSecond_stage_propellant_mass.value);
	Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);
	Second_stage_total_thrust = parseFloat(elSecond_stage_total_thrust.value);
	Third_stage_propellant_mass = parseFloat(elThird_stage_propellant_mass.value);
	Third_stage_dry_mass = parseFloat(elThird_stage_dry_mass.value);
	Transfer_Orbit_stage_propellant_mass = parseFloat(elTransfer_Orbit_stage_propellant_mass.value);
	Transfer_Orbit_stage_dry_mass = parseFloat(elTransfer_Orbit_stage_dry_mass.value);

	if (elStages.selectedIndex < 1)
		{
			Second_stage_propellant_mass = 0.;
			Second_stage_dry_mass = 0.;
		}

	if (elStages.selectedIndex < 2)
		{
			Transfer_Orbit_stage_propellant_mass = 0.;
			Transfer_Orbit_stage_dry_mass = 0.;
		}                                                                         

	if (elStages.selectedIndex < 3)
		{
			Third_stage_propellant_mass = 0.;
			Third_stage_dry_mass = 0.;
		}                                                                         

	Fairing_mass = parseFloat(elFairing_mass.value);
	Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);
	Assumed_payload_mass = parseFloat(elAssumed_payload_mass.value);

	Rocket_Mass = First_stage_propellant_mass + First_stage_dry_mass +
			Second_stage_propellant_mass + Second_stage_dry_mass +
			Third_stage_propellant_mass + Third_stage_dry_mass +
			Transfer_Orbit_stage_propellant_mass + Transfer_Orbit_stage_dry_mass;
	elRocket_Mass.value = Rocket_Mass.toFixed(0);
	Rocket_Mass = parseFloat(elRocket_Mass.value);

	Lift_off_Mass = Rocket_Mass + Fairing_mass + Payload_mass_calculated;
	elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);

	Thrust_to_weight_ratio = First_stage_total_thrust/Lift_off_Mass;
	if (elBooster.checked) Thrust_to_weight_ratio = (First_stage_total_thrust+Second_stage_total_thrust)/Lift_off_Mass;
	if (Thrust_to_weight_ratio < 1.05) Thrust_to_weight_ratio = 1.05;
	elThrust_to_weight_ratio.value = Thrust_to_weight_ratio.toFixed(3);

	Thrust_to_weight_ratio_2nd = Second_stage_total_thrust/(Lift_off_Mass - First_stage_propellant_mass - First_stage_dry_mass);
	if (Thrust_to_weight_ratio_2nd < 0.)Thrust_to_weight_ratio_2nd = 0.;
	elThrust_to_weight_ratio_2nd.value = Thrust_to_weight_ratio_2nd.toFixed(3);

	v1st_Dry_to_Wet_mass_ratio = First_stage_dry_mass / (First_stage_propellant_mass + First_stage_dry_mass)*100.
	el1st_Dry_to_Wet_mass_ratio.value = v1st_Dry_to_Wet_mass_ratio.toFixed(3);

	if (elStages.selectedIndex > 0)
	   {
		v2nd_Dry_to_Wet_mass_ratio = Second_stage_dry_mass / (Second_stage_propellant_mass + Second_stage_dry_mass)*100.;
		el2nd_Dry_to_Wet_mass_ratio.value = v2nd_Dry_to_Wet_mass_ratio.toFixed(3);

		v2nd_Stage_mass_ratio = (Rocket_Mass - First_stage_dry_mass - First_stage_propellant_mass) / Rocket_Mass*100.;
//			v2nd_Stage_mass_ratio = (Second_stage_propellant_mass + Second_stage_dry_mass + Third_stage_propellant_mass + Third_stage_dry_mass + Transfer_Orbit_stage_propellant_mass + Transfer_Orbit_stage_dry_mass) / Rocket_Mass*100.;
		el2nd_Stage_mass_ratio.value = v2nd_Stage_mass_ratio.toFixed(3);
	   }

	if (elStages.selectedIndex > 1)
	   {
		vOrb_Dry_to_Wet_mass_ratio = Transfer_Orbit_stage_dry_mass / (Transfer_Orbit_stage_propellant_mass + Transfer_Orbit_stage_dry_mass)*100.;
		elOrb_Dry_to_Wet_mass_ratio.value = vOrb_Dry_to_Wet_mass_ratio.toFixed(3);

//			vOrb_Stage_mass_ratio = (Rocket_Mass - First_stage_dry_mass - First_stage_propellant_mass - Second_stage_dry_mass - Second_stage_propellant_mass - Third_stage_propellant_mass - Third_stage_dry_mass) / Rocket_Mass*100.
		vOrb_Stage_mass_ratio = (Transfer_Orbit_stage_propellant_mass + Transfer_Orbit_stage_dry_mass) / Rocket_Mass*100.
		elOrb_Stage_mass_ratio.value = vOrb_Stage_mass_ratio.toFixed(3);
	   }

	if (elStages.selectedIndex > 2)
	   {
		v3rd_Dry_to_Wet_mass_ratio = Third_stage_dry_mass / (Third_stage_propellant_mass + Third_stage_dry_mass)*100.;
		el3rd_Dry_to_Wet_mass_ratio.value = v3rd_Dry_to_Wet_mass_ratio.toFixed(3);

		v3rd_Stage_mass_ratio = (Third_stage_propellant_mass + Third_stage_dry_mass) / Rocket_Mass*100.
		el3rd_Stage_mass_ratio.value = v3rd_Stage_mass_ratio.toFixed(3);
	   }

}

function MassRecalculateAndCalc()
{
	MassRecalculate();
	Abs_Calculation.checked = true;
	Calculate();
}

function onPageLoad()
{
	for (var i = 0; i<s_start_point_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_start_point_data[i][0];
		opt.innerHTML = s_start_point_data[i][0];
		opt.title=s_start_point_data[i][5];
		elStartingPoint.appendChild(opt);
	}
	elStartingPoint.addEventListener('change', updateStartingPointAndCalc);
	
	for (var i = 0; s_rocket_data[i][0] !="NEW"; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_rocket_data[i][1];
		opt.innerHTML = s_rocket_data[i][1];
		opt.title=s_rocket_data[i][40];
		elRocket.appendChild(opt);
	}
	s_rocket_count = i;

	elRocket.addEventListener('change', updateRocketAndCalc);
	
	for (var i = 0; i<s_orbit_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_orbit_data[i][0];
		opt.innerHTML = s_orbit_data[i][0];
		opt.title=s_orbit_data[i][6];
		elOrbit.appendChild(opt);
	}
	elOrbit.addEventListener('change', updateOrbitAndCalc);
	
	for (var i = 0; i<s_fuel_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_fuel_name[i][0];
		opt.innerHTML = s_fuel_name[i][0];
		opt.title=s_fuel_name[i][1];
		elFuel.appendChild(opt);
	}
	elFuel.addEventListener('change', updateFuelAndCalc);

	for (var i = 0; i<s_fuel_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_fuel_name[i][0];
		opt.innerHTML = s_fuel_name[i][0];
		opt.title=s_fuel_name[i][1];
		elFuel2.appendChild(opt);
	}
	elFuel2.addEventListener('change', updateFuelAndCalc);

	for (var i = 0; i<s_fuel_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_fuel_name[i][0];
		opt.innerHTML = s_fuel_name[i][0];
		opt.title=s_fuel_name[i][1];
		elFuel3.appendChild(opt);
	}
	elFuel3.addEventListener('change', updateFuelAndCalc);

	for (var i = 0; i<s_fuel_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_fuel_name[i][0];
		opt.innerHTML = s_fuel_name[i][0];
		opt.title=s_fuel_name[i][1];
		elFuelO.appendChild(opt);
	}
	elFuelO.addEventListener('change', updateFuelAndCalc);

	for (var i = 0; i<s_cycle_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_cycle_name[i][0];
		opt.innerHTML = s_cycle_name[i][0];
		opt.title=s_cycle_name[i][1];
		elCycle.appendChild(opt);
	}
	elCycle.addEventListener('change', updateCycleAndCalc);

	for (var i = 0; i<s_cycle_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_cycle_name[i][0];
		opt.innerHTML = s_cycle_name[i][0];
		opt.title=s_cycle_name[i][1];
		elCycle2.appendChild(opt);
	}
	elCycle2.addEventListener('change', updateCycleAndCalc);

	for (var i = 0; i<s_cycle_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_cycle_name[i][0];
		opt.innerHTML = s_cycle_name[i][0];
		opt.title=s_cycle_name[i][1];
		elCycle3.appendChild(opt);
	}
	elCycle3.addEventListener('change', updateCycleAndCalc);

	for (var i = 0; i<s_cycle_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_cycle_name[i][0];
		opt.innerHTML = s_cycle_name[i][0];
		opt.title=s_cycle_name[i][1];
		elCycleO.appendChild(opt);
	}
	elCycleO.addEventListener('change', updateCycleAndCalc);
	
	for (var i = 0; i<s_stages_count; i++)
	{
		var opt = document.createElement('option');
		opt.value = s_stages_name[i];
		opt.innerHTML = s_stages_name[i];
		elStages.appendChild(opt);
	}
	elStages.addEventListener('change', updateStages);

	for (var i = 0; i<s_engine_count; i=i+2)
	{
		var opt = document.createElement('option');
			opt.value = s_engine_data[i][0];
			opt.innerHTML = s_engine_data[i][0];
			opt.title=s_engine_data[i][11];
			elEngine1.appendChild(opt);
	}
	elEngine1.addEventListener('change', updateEngine1);

	for (var i = 1; i<s_engine_count; i=i+2)
	{
		var opt = document.createElement('option');
			opt.value = s_engine_data[i][0];
			opt.innerHTML = s_engine_data[i][0];
			opt.title=s_engine_data[i][11];
			elEngine2.appendChild(opt);
	}                                           
	elEngine2.addEventListener('change', updateEngine2);

	el1st_Dry_to_Wet_mass_ratio_Range.addEventListener('change', update1st_Dry_to_Wet_mass_ratio_Range);
	el2nd_Dry_to_Wet_mass_ratio_Range.addEventListener('change', update2nd_Dry_to_Wet_mass_ratio_Range);
	el3rd_Dry_to_Wet_mass_ratio_Range.addEventListener('change', update3rd_Dry_to_Wet_mass_ratio_Range);
	elOrb_Dry_to_Wet_mass_ratio_Range.addEventListener('change', updateOrb_Dry_to_Wet_mass_ratio_Range);
	elUnused_propellant_of_1st_Stage_Range.addEventListener('change', updateUnused_propellant_of_1st_Stage_Range);
	elUnused_propellant_of_2nd_Stage_Range.addEventListener('change', updateUnused_propellant_of_2nd_Stage_Range);
	elUnused_propellant_of_3rd_Stage_Range.addEventListener('change', updateUnused_propellant_of_3rd_Stage_Range);
	elUnused_propellant_of_Transfer_Orbit_Stage_Range.addEventListener('change', updateUnused_propellant_of_Transfer_Orbit_Stage_Range);
	elFirst_stage_isp_sea_level_Range.addEventListener('change', updateFirst_stage_isp_sea_level_Range);
	elFirst_stage_isp_vac_Range.addEventListener('change', updateFirst_stage_isp_vac_Range);
	elSecond_stage_isp_sea_level_Range.addEventListener('change', updateSecond_stage_isp_sea_level_Range);
	elSecond_stage_isp_vac_Range.addEventListener('change', updateSecond_stage_isp_vac_Range);
	elThird_stage_isp_Range.addEventListener('change', updateThird_stage_isp_Range);
	elTransfer_Orbit_Stage_isp_Range.addEventListener('change', updateTransfer_Orbit_Stage_isp_Range);
	elSpecific_Impulse_Variation_Range.addEventListener('change', updateSpecific_Impulse_Variation_Range);

	el1st_Dry_to_Wet_mass_ratio.addEventListener('change', update1st_Dry_to_Wet_mass_ratio);
	el2nd_Dry_to_Wet_mass_ratio.addEventListener('change', update2nd_Dry_to_Wet_mass_ratio);
	el3rd_Dry_to_Wet_mass_ratio.addEventListener('change', update3rd_Dry_to_Wet_mass_ratio);
	elOrb_Dry_to_Wet_mass_ratio.addEventListener('change', updateOrb_Dry_to_Wet_mass_ratio);
	elUnused_propellant_of_1st_Stage.addEventListener('change', updateUnused_propellant_of_1st_Stage);
	elUnused_propellant_of_2nd_Stage.addEventListener('change', updateUnused_propellant_of_2nd_Stage);
	elUnused_propellant_of_Transfer_Orbit_Stage.addEventListener('change', updateUnused_propellant_of_Transfer_Orbit_Stage);
	elFirst_stage_isp_sea_level.addEventListener('change', updateFirst_stage_isp_sea_level);
	elFirst_stage_isp_vac.addEventListener('change', updateFirst_stage_isp_vac);
	elSecond_stage_isp_sea_level.addEventListener('change', updateSecond_stage_isp_sea_level);
	elSecond_stage_isp_vac.addEventListener('change', updateSecond_stage_isp_vac);
	elTransfer_Orbit_Stage_isp.addEventListener('change', updateTransfer_Orbit_Stage_isp);
	elSpecific_Impulse_Variation.addEventListener('change', updateSpecific_Impulse_Variation);
				
	elStarting_point_Altitude.addEventListener('change', StrtPointAlt_Change);
	elAdditional_Speed.addEventListener('change', Calculate);
	elOrbit_Perigee.addEventListener('change', OrbitChange);
	elOrbit_Apogee.addEventListener('change', OrbitChange);
	elSpaceport_latitude.addEventListener('change', LatitudeChange);
	elOrbit_Inclination.addEventListener('change', InclinationChange);

	elFirst_stage_engine_thrust.addEventListener('change', updateWeight_Rel);
	elFirst_stage_engines_number.addEventListener('change', updateWeight_Rel);
	elSecond_stage_engine_thrust.addEventListener('change', updateWeight_Rel);
	elSecond_stage_engines_number.addEventListener('change', updateWeight_Rel);
	
	elThrust_to_weight_ratio.addEventListener('change', updateWeight_Ratio);
	elThrust_to_weight_ratio_2nd.addEventListener('change', updateWeight_Ratio2);

	elRocket_Mass.addEventListener('change',  updateWeight_Mass);
	elMax_midsection_D.addEventListener('change', Calculate);
	elFairing_mass.addEventListener('change', Calculate);
	elFairing_jettison_velocity.addEventListener('change', Calculate);
	elJettisoned_battery_mass.addEventListener('change', Calculate);
	elAssumed_payload_mass.addEventListener('change', Calculate);
	el2nd_Stage_mass_ratio.addEventListener('change', updateWeight_Ratio);
	el3rd_Stage_mass_ratio.addEventListener('change', updateWeight_Ratio);
	elOrb_Stage_mass_ratio.addEventListener('change', updateWeight_Ratio);
//		el1st_Dry_to_Wet_mass_ratio.addEventListener('change', Calculate_Rel);
	el1st_Dry_to_Wet_mass_ratio.addEventListener('change', updateWeight_Ratio);
	el2nd_Dry_to_Wet_mass_ratio.addEventListener('change', updateWeight_Ratio);
	el3rd_Dry_to_Wet_mass_ratio.addEventListener('change', updateWeight_Ratio);
	elOrb_Dry_to_Wet_mass_ratio.addEventListener('change', updateWeight_Ratio);
	elUnused_propellant_of_1st_Stage.addEventListener('change', Calculate);
	elUnused_propellant_of_2nd_Stage.addEventListener('change', Calculate);
	elUnused_propellant_of_3rd_Stage.addEventListener('change', Calculate);
	elUnused_propellant_of_Transfer_Orbit_Stage.addEventListener('change', Calculate);
	elFirst_stage_isp_sea_level.addEventListener('change', Calculate);
	elFirst_stage_isp_vac.addEventListener('change', Calculate);
	elSecond_stage_isp_sea_level.addEventListener('change', Calculate);
	elSecond_stage_isp_vac.addEventListener('change', Calculate);
	elThird_stage_isp.addEventListener('change', Calculate);
	elTransfer_Orbit_Stage_isp.addEventListener('change', Calculate);
	elSpecific_Impulse_Variation.addEventListener('change', Calculate);

	elExtra_speed_for_flight_to_the_planets.addEventListener('change', Calculate);
	elFirst_stage_propellant_mass.addEventListener('change', MassRecalculateAndCalc);
	elFirst_stage_dry_mass.addEventListener('change', MassRecalculateAndCalc);
	elFirst_stage_total_thrust.addEventListener('change', MassRecalculateAndCalc);
	elSecond_stage_propellant_mass.addEventListener('change', MassRecalculateAndCalc);
	elSecond_stage_dry_mass.addEventListener('change', MassRecalculateAndCalc);
	elSecond_stage_total_thrust.addEventListener('change', MassRecalculateAndCalc);
	elThird_stage_propellant_mass.addEventListener('change', MassRecalculateAndCalc);
	elThird_stage_dry_mass.addEventListener('change', MassRecalculateAndCalc);
	elTransfer_Orbit_stage_propellant_mass.addEventListener('change', MassRecalculateAndCalc);
	elTransfer_Orbit_stage_dry_mass.addEventListener('change', MassRecalculateAndCalc);

	elRocket.selectedIndex = 1;
	for (var i=0; s_rocket_data[i][0] !="NEW"; ++i)
	{
		if ( s_rocket_data[i][0] == rocket )
		{
			elRocket.selectedIndex = i;
			break;
		}
	}

//		elRocket.selectedIndex = rocket;

	updateEngine1();
	updateEngine2();

//		elExpand.setAttribute('isBool',0);
	elExpand.addEventListener('click', ExpandChange);
//		ExpandChange();
	fStagesChange();

	elResetInit.checked = false;
	elResetInit.addEventListener('change', ResetInitPayload);

	elAbs_Calculation.checked = true;
	elAbs_Calculation.addEventListener('change', Abs_CalculationChange);

//		elReusable.checked = false;
	elReusable.addEventListener('change', ReusabilityChange);

	elBooster.checked = false;
	elBooster.addEventListener('change', BoosterChange);

	elAir_Launch.checked = false;
	elAir_Launch.addEventListener('change', AirLaunchChangeAndCalc);

	elLimitation.checked = true;
	elLimitation.addEventListener('change', LimitationChange);

	elSet_averages.checked = false;
	elSet_averages.addEventListener('change', Set_averagesChange);

	elSet_AllMin.checked = false;
	elSet_AllMin.addEventListener('change', Set_AllMinChange);

	elSet_AllMax.checked = false;
	elSet_AllMax.addEventListener('change', Set_AllMaxChange);
	
	updateRocket();
	updateStartingPoint();
//		updateOrbit();
	updateCycle();
	updateFuel();
  
	updateStages();
	Calculate();
	Abs_Calculation.checked = true;
	if (elRocket.selectedIndex == 0)Abs_Calculation.checked = false;
        
	document.addEventListener('change', OnForm);
	if(rocket == "about") openAbout();
}

function onPageUnload()
{
mywindow.close();
}
