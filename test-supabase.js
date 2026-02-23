const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://suzmovbxrxqxzqzcqnlu.supabase.co';
const supabaseKey = 'sb_publishable_hRfPv4B86Qdsn2-hbbHIgA_2Z9K64Lq';
const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  console.log('🔍 Testing Supabase connection...');
  console.log(`URL: ${supabaseUrl}`);
  
  try {
    // Test 1: Check if table exists by trying to query it
    console.log('\n📋 Attempting to query institutional_inquiries table...');
    const { data, error } = await supabase
      .from('institutional_inquiries')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Table query error:', error.message);
      console.error('Error details:', error);
      return;
    }

    console.log('✅ Table exists and is accessible');
    console.log('Sample data retrieved:', data?.length || 0, 'records');

    // Test 2: Try to insert a test record
    console.log('\n📝 Attempting to insert test record...');
    const testData = {
      institution: '🧪 TEST_FIRM',
      email: 'test@test.local',
      capital_base: '$TEST_AMOUNT',
      integration: 'test',
      message: 'This is a test submission from validation script',
      submitted_at: new Date().toISOString(),
    };

    const { data: insertedData, error: insertError } = await supabase
      .from('institutional_inquiries')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ Insert error:', insertError.message);
      console.error('Error details:', insertError);
      return;
    }

    console.log('✅ Test record inserted successfully');
    console.log('Inserted record:', insertedData?.[0] || {});

    // Test 3: Verify the record exists
    console.log('\n🔎 Verifying record...');
    const { data: verifyData, error: verifyError } = await supabase
      .from('institutional_inquiries')
      .select('*')
      .eq('email', 'test@test.local')
      .order('submitted_at', { ascending: false })
      .limit(1);

    if (verifyError) {
      console.error('❌ Verification error:', verifyError.message);
      return;
    }

    if (verifyData?.length > 0) {
      console.log('✅ Verification successful - test record found');
      console.log('Latest record:', verifyData[0]);
    } else {
      console.log('⚠️ Record not found in verification query');
    }

  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
    console.error(err);
  }
}

testSupabase();
