import firstImage from '../images/first_post.jpeg'
import {postCardDateFormat} from "../../util/dateUtils";
import authorImg  from '../images/theoxarisImg.jpeg'

export default {
    id:'1',
    title: 'The Art of Storytelling In Software Development',
    img: firstImage,
    authorName: 'George Theocharis',
    authorImg: authorImg,
    coverText: 'Software development nowadays is a complex process that while entailing many scientific aspects, it can also be seen as a form of art. Even rules and best practices aside, a piece of code will always mirror the mind, soul and creativity of the developer that created it. As such a developer can always benefit from borrowing elements and studying great masters, not only of Computer Science, but of other arts too, such as the art of storytelling. After all, a craftsman must keep honing their skills.',
    creationDate: postCardDateFormat(new Date()),
    body: '<div class="z ab ac ae af dp ah ai"><div>' +
        '</div>' +
        '<div class="fb">' +
        '<div class="n fc fd fe ff">' +
        '<div class="o n">' +
        '<div>' +
'<figcaption class="id ie de dc dd if ig ar cl fm at aw" data-selectable-paragraph="">“Storytelling is the most powerful way to put ideas into the world.” - Robert McAfee Brown</figcaption>' +
        '</figure>' +
        '<p id="dac4" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'Software development nowadays is a complex process that while entailing many scientific aspects, it can also be seen as a form of art. ' +
        'Even rules and best practices aside, a piece of code will always mirror the mind, soul and creativity of the developer that created it.' +
        ' As such a developer can always benefit from borrowing elements and studying great masters, not only of Computer Science, but of other arts too, ' +
        'such as the art of storytelling. After all, a craftsman must keep honing their skills.</p>' +
        '<p id="ad17" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'Programming and storytelling are very similar in nature. For example, both are expressed via written language and are means of communication ' +
        '(either seen as a set of instructions to a machine or as code read by a colleague). Both have rules, best practices, techniques, and structure. How can a developer though, find value from studying storytelling?' +
        '</p>' +
        '<p id="b50e" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'A great technique in storytelling is to <strong class="ij iv">show rather than tell </strong>to<strong class="ij iv"> </strong>your audience what a character' +
        ' may be feeling or experiencing. By telling, you simply inform the reader, presenting them with factual statements, while by showing, a more intimate connection is being created.' +
        ' A mental model of the scene and the emotions that the characters are feeling, instead of simply stating information.</p>' +
        '<blockquote class="iw ix iy"><p id="84fc" class="ih ii iz ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        '“Don’t tell me the moon is shining. Show me the glint of light on broken glass.” <br>― <strong class="ij iv">Anton Checkhov</strong></p></blockquote>' +
        '<p id="9c94" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'In programming, there is a similar principle that is known as <strong class="ij iv">Tell, Don’t Ask </strong>that aims to control coupling between classes. As a good storyteller is expected ' +
        'to show to the audience instead of directing telling them information, a software developer can also tell (command) its objects to behave as expected instead of querying them for their internal state.</p>' +
        '<p id="094a" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">To explain it further, let’s see an example of a trivial but typical ask object:</p>' +
        '<figure class="hg hh hi hj hk hl"><div class="hv r ho"><div class="uu hy r"' +
        '>' +
        '<pre>' +
        'public class Car {\n' +
        '    private boolean lights;\n' +
        '    \n' +
        '    public boolean getLights() {\n' +
        '        return lights;\n' +
        '    }\n' +
        '\n' +
        '    public void setLights(boolean lights) {\n' +
        '        this.lights = lights;\n' +
        '    }\n' +
        '}</pre></div>' +
        '</div>' +
        '</figure><blockquote class="iw ix iy"><p id="f7c5" class="ih ii iz ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        '</a><em class="as">.</em></p></blockquote>' +
        '<p id="485b" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'The above car class is quite simple with just a single private field, a public getter and a public setter. When the developer wants ' +
        'to get information about the state of the lights of the car, in order to turn them off for example, would <strong class="ij iv">ask </strong>' +
        'the car instance by invoking the getter in an if statement and then proceed to set the lights off by calling the setter.</p>' +
        '<p id="7146" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">' +
        'By following the Tell, Don’t Ask principle, we can refactor our object to the following:</p>' +
        '<figure class="hg hh hi hj hk hl"><div class="hv r ho"><div class="ut hy r">' +
        '<pre>' +
        'public class Car {\n' +
        '    \n' +
        '    private boolean lights;\n' +
        '\n' +
        '    private boolean getLights() {\n' +
        '        return lights;\n' +
        '    }\n' +
        '\n' +
        '    private void setLights(boolean lights) {\n' +
        '        this.lights = lights;\n' +
        '    }\n' +
        '    \n' +
        '    public void turnLightsOn() {\n' +
        '        if(getLights()) return;\n' +
        '        setLights(true);\n' +
        '    }\n' +
        '\n' +
        '    public void turnLightsOff() {\n' +
        '        if(!getLights()) return;\n' +
        '        setLights(false);\n' +
        '    }\n' +
        '}</pre>' +
        '</div></div>' +
        '</figure>' +
        '<p id="15b1" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">Now instead of asking, we can tell the object to turn the lights on or off and trust it to behave as expected. But what have we accomplished here?</p><p id="c874" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">As developers, day in and day out, we write and read code. Actually, we might be spending more time reading than writing. By following the principle of tell, don’t ask, not only we have reduced coupling (imagine a class with actual internal dependencies and not a single lights field) but also we have added intent to our code. As a good storyteller would have done, we have expressed our intention to our fellow reader (developer) and we have created a narrative. The car object, can now be a character in a bigger picture, while the lights method can be our own version of the glint of light on the broken glass.</p><p id="2ce0" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">As all matters in our craft, the above technique is not appropriate to always being followed, but instead the developer should use it depending the situation at hand. On an upcoming article we will examine other ways and techniques to aid us in telling a story via our code.</p><p id="c4d9" class="ih ii as ij b el ik il eo im in io ip et iq ir ew is it ez iu dk ej" data-selectable-paragraph="">Till then don’t stop creating and exploring ideas!</p></div>'
}